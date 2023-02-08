import { Navbar } from "../../components/navbar";
import "./main.css";
import { CustomHr, Header } from "../../components/elements";
import { MenuBar } from "../../components/menu-bar";

const Lead = () => {
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
