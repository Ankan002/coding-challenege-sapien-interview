import { MenuElement } from "../elements";

const MenuBar = () => {
    return (
        <div className="mx-2 px-3 py-1 d-flex align-items-center">
            <MenuElement name="Clients" />
            <MenuElement name="Tab 2" />
            <MenuElement name="Tab 3" />
        </div>
    )
};

export default MenuBar;
