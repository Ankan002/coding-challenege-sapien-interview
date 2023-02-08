import { Navbar } from "../../components/navbar";
import "./main.css";
import { Header } from "../../components/elements";
import { MenuBar } from "../../components/menu-bar";

const Lead = () => {
    return (
        <main>
            <Navbar />
            <Header heading="Clients" />

            <hr />

            <MenuBar />
        </main>
    )
};

export default Lead;
