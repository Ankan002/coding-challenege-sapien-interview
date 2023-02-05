import { Navbar as BootstrapNavbar } from "react-bootstrap";
import { BsFillGrid3X3GapFill, BsBell, BsFillCircleFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <BootstrapNavbar
            bg="dark"
            className="shadow-sm container-fluid"
        >
                <BootstrapNavbar.Brand
                    href="/"
                    className="col-6 col-md-4 d-flex flex-row align-items-center"
                >
                    <strong className="text-white">Sapien Systems</strong>
                </BootstrapNavbar.Brand>

                <p className="col-md-4 p-0 m-0 text-white font-weight-bold d-none d-md-flex align-items-center justify-content-center text-center">
                    #BeAChangeMaker
                </p>

                <div className="col-6 col-md-4 d-flex align-items-center justify-content-end">
                    <BsBell className="text-white mx-2" size={20} />
                    <BsFillGrid3X3GapFill className="text-white mx-2" size={20} />
                    <BsFillCircleFill className="text-white mx-2" size={20} />
                </div>
        </BootstrapNavbar>
    );
};

export default Navbar;
