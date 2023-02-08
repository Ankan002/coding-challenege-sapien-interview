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
        if(data?.leads?.data) setLeads(data?.leads?.data);
    }, [data]);

    return(
        <></>
    )
};

export default LeadBody;
