import { Navbar } from "../../components/navbar";
import "./main.css";
import { CustomHr, Header } from "../../components/elements";
import { MenuBar } from "../../components/menu-bar";
import { Lead as LeadType } from "../../types/lead";
import { useState } from "react";
import { LeadBody } from "../../components/lead-body";
import { SearchHeader } from "../../components/search-header";
import { NewLeadModal } from "../../components/new-lead-modal";

const Lead = () => {
    const [leads, setLeads] = useState<Array<LeadType>>([]);
    const [isCreateLeadModalVisible, setIsCreateLeadModalVisible] = useState<boolean>(false);

    return (
        <main>
            <Navbar />
            <Header heading="Clients" />

            <hr style={{margin: 0}} />

            <MenuBar />

            <CustomHr withMargin={true} />

            <SearchHeader setIsCreateLeadModalVisible={setIsCreateLeadModalVisible} />

            <LeadBody leads={leads} setLeads={setLeads} />

            <NewLeadModal isOpen={isCreateLeadModalVisible} setOpen={setIsCreateLeadModalVisible} setLeads={setLeads} />
        </main>
    )
};

export default Lead;
