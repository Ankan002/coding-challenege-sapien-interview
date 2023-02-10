import { Navbar } from "../../components/navbar";
import "./main.css";
import { CustomHr, Header } from "../../components/elements";
import { MenuBar } from "../../components/menu-bar";
import { Lead as LeadType } from "../../types/lead";
import { useState } from "react";
import { LeadBody } from "../../components/lead-body";
import { SearchHeader } from "../../components/search-header";
import { NewLeadModal } from "../../components/new-lead-modal";
import { CollapseMenu } from "../../components/collapse-menu";

const Lead = () => {
    const [leads, setLeads] = useState<Array<LeadType>>([]);
    const [isCreateLeadModalVisible, setIsCreateLeadModalVisible] =
        useState<boolean>(false);
    const [isCollapseMenuOpen, setIsCollapseMenuOpen] =
        useState<boolean>(false);

    return (
        <main>
            <Navbar setCollapseMenuOpen={setIsCollapseMenuOpen} />
            <Header heading="Clients" />

            <hr style={{ margin: 0 }} />

            <MenuBar />

            <CustomHr withMargin={true} />

            <SearchHeader
                setIsCreateLeadModalVisible={setIsCreateLeadModalVisible}
            />

            <LeadBody leads={leads} setLeads={setLeads} />

            <NewLeadModal
                isOpen={isCreateLeadModalVisible}
                setOpen={setIsCreateLeadModalVisible}
                setLeads={setLeads}
            />

            <div
                style={{
                    height: "100vh",
                    width: "25%",
                    position: "fixed",
                    backgroundColor: "#000",
                }}
            ></div>

            <CollapseMenu isOpen={isCollapseMenuOpen} />
        </main>
    );
};

export default Lead;
