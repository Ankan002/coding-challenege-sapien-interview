import {AiFillHome} from "react-icons/ai";
import {BiUser, BiPackage, BiMoney} from "react-icons/bi";
import {BsChatLeft, BsCalendar2Event} from "react-icons/bs";
import {HiOutlineTicket} from "react-icons/hi";
import {RiMiniProgramFill} from "react-icons/ri";
import {FaCoins} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";

interface Props {
    isOpen: boolean;
}

const CollapseMenu = (props: Props) => {
    const { isOpen } = props;

    return(
        <div className="bg-dark" style={{
            height: "100vh",
            width: "25%",
            position: "fixed",
            backgroundColor: "#000",
            left: 0,
            top: 0,
            display: isOpen ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontWeight: 500,
            fontSize: 18
        }}>
            <div className="d-flex align-items-center px-0 px-sm-4 justtify-content-center my-3">
                <AiFillHome size={20} />
                <span className="d-none d-md-block ml-2">Home</span>
            </div>
            <div className="d-flex align-items-center px-0 px-sm-4 justtify-content-center my-3">
                <BsChatLeft size={20} />
                <span className="d-none d-md-block ml-2">Chats</span>
            </div>
            <div className="d-flex align-items-center px-0 px-sm-4 justtify-content-center my-3">
                <BsCalendar2Event size={20} />
                <span className="d-none d-md-block ml-2">Schedule</span>
            </div>
            <div className="d-flex align-items-center px-0 px-sm-4 justtify-content-center my-3">
                <BiUser size={20} />
                <span className="d-none d-md-block ml-2">Clients</span>
            </div>
            <div className="d-flex align-items-center px-0 px-sm-4 justtify-content-center my-3">
                <HiOutlineTicket size={20} />
                <span className="d-none d-md-block ml-2">Bookings</span>
            </div>
            <div className="d-flex align-items-center px-0 px-sm-4 justtify-content-center my-3">
                <RiMiniProgramFill size={20} />
                <span className="d-none d-md-block ml-2">Programs</span>
            </div>
            <div className="d-flex align-items-center px-0 px-sm-4 justtify-content-center my-3">
                <BiPackage size={20} />
                <span className="d-none d-md-block ml-2">Packages</span>
            </div>
            <div className="d-flex align-items-center px-0 px-sm-4 justtify-content-center my-3">
                <FaCoins size={20} />
                <span className="d-none d-md-block ml-2">Resources</span>
            </div>
            <div className="d-flex align-items-center px-0 px-sm-4 justtify-content-center my-3">
                <BiMoney size={20} />
                <span className="d-none d-md-block ml-2">Finance</span>
            </div>
            <div className="d-flex align-items-center px-0 px-sm-4 justtify-content-center my-3">
                <FiSettings size={20} />
                <span className="d-none d-md-block ml-2">Settings</span>
            </div>
        </div>
    )
};

export default CollapseMenu;
