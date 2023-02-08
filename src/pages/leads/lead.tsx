import { Navbar } from "../../components/navbar";
import "./main.css";
import { CustomHr, Header } from "../../components/elements";
import { MenuBar } from "../../components/menu-bar";
import { useLazyQuery } from "@apollo/client";
import { LEAD_QUERY } from "../../graphql/queries";
import { useEffect } from "react";

const Lead = () => {
    const [fetchLead, {data: result, error}] = useLazyQuery(LEAD_QUERY);

    useEffect(() => {
        fetchLead({
            variables: {
                pagination: {
                    page: 1,
                    pageSize: 10
                }
            }
        })
    }, []);

    useEffect(() => {
        if(error) console.log(error);

        else console.log(result)
    }, [result, error]);

    return (
        <main>
            <Navbar />
            <Header heading="Clients" />

            <hr style={{margin: 0}} />

            <MenuBar />

            <CustomHr />
        </main>
    )
};

export default Lead;
