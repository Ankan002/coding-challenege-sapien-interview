import { useQuery } from "@apollo/client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LEAD_QUERY } from "../../graphql/queries";
import { Lead } from "../../types/lead";
import { CustomTr } from "../elements";
import { TableHead } from "../table-head";
import "./index.css";

interface Props {
    leads: Array<Lead>;
    setLeads: Dispatch<SetStateAction<Array<Lead>>>;
}

const LeadBody = (props: Props) => {
    const { leads, setLeads } = props;

    const [isFirstFetch, setIsFirstFetch] = useState(true);
    const [isMoreFetchable, setIsMoreFetchable] = useState(true);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [fetchingMore, setFetchingMore] = useState(false);

    const { data, fetchMore } = useQuery(LEAD_QUERY, {
        variables: {
            pagination: {
                page: currentPageNumber,
                pageSize: 10,
            },
        },
    });

    const onFetchMore = async () => {
        if(isMoreFetchable && !fetchingMore) {
            setFetchingMore(true);

            const { data, error } = await fetchMore({
                variables: {
                    pagination: {
                        page: currentPageNumber,
                        pageSize: 10,
                    },
                }
            });

            if(error) {
                setFetchingMore(false);
                return;
            }

            if(data?.leads?.data) {
                setLeads([...leads, ...data.leads.data]);
                setFetchingMore(false);
                setCurrentPageNumber(currentPageNumber + 1);
                if (data?.leads?.data < 10) setIsMoreFetchable(false);
            }
        }
    }

    useEffect(() => {
        if (isFirstFetch && data?.leads?.data) {
            setLeads(data?.leads?.data);
            setIsFirstFetch(false);
            setCurrentPageNumber(currentPageNumber + 1);

            if (data?.leads?.data < 10) setIsMoreFetchable(false);
        }
    }, [data]);

    return (
        <>
            <div
                className="table-responsive text-nowrap mt-4 px-4 vh-100"
                style={{
                    overflowX: "scroll",
                }}
            >
                <table className="table">
                    <TableHead />
                    <tbody>
                        {leads.map((lead) => (
                            <CustomTr key={lead.id} lead={lead} setLeads={setLeads} />
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="w-100 d-flex align-items-center justify-content-end px-5 pb-3">
                <button className="btn-dark rounded" style={{
                    fontWeight: 500,
                    cursor: "pointer"
                }} onClick={onFetchMore}>
                    Load More
                </button>
            </div>
        </>
    );
};

export default LeadBody;
