import { useQuery } from "@apollo/client";
import { Dispatch, SetStateAction, useEffect } from "react";
import { LEAD_QUERY } from "../../graphql/queries";
import { Lead } from "../../types/lead";

interface Props {
    leads: Array<Lead>;
    setLeads: Dispatch<SetStateAction<Array<Lead>>>;
}

const LeadBody = (props: Props) => {
    const { leads, setLeads } = props;

    const { data, loading, error, fetchMore } = useQuery(LEAD_QUERY);

    useEffect(() => {
        console.log(data?.leads?.data)
        if (data?.leads?.data) setLeads(data?.leads?.data);
    }, [data]);

    return (
        <div style={{
            overflowX: "scroll",
            width: "100%",
            padding: "0 10px"
        }}>
            <div style={{
                display: "grid"
            }}>
                <div>Last Date</div>
                <div>Last Date</div>
                <div>Last Date</div>
                <div>Last Date</div>
                <div>Last Date</div>
                <div>Last Date</div>
                <div>Last Date</div>
            </div>
        </div>
    );
};

export default LeadBody;
