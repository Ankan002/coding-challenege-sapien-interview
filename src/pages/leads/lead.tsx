import { Navbar } from "../../components/navbar";
import "./main.css";
import { CustomHr, Header } from "../../components/elements";
import { MenuBar } from "../../components/menu-bar";
import { Lead as LeadType } from "../../types/lead";
import { useState } from "react";
import { LeadBody } from "../../components/lead-body";
import { SearchHeader } from "../../components/search-header";

const Lead = () => {
    const [leads, setLeads] = useState<Array<LeadType>>([]);

    return (
        <main>
            <Navbar />
            <Header heading="Clients" />

            <hr style={{margin: 0}} />

            <MenuBar />

            <CustomHr />

            <SearchHeader />

            <LeadBody leads={leads} setLeads={setLeads} />
        </main>
    )
};

export default Lead;
