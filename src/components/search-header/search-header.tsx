import { Dispatch, SetStateAction } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";

interface Props {
    setIsCreateLeadModalVisible: Dispatch<SetStateAction<boolean>>;
}

const SearchHeader = (props: Props) => {
    const { setIsCreateLeadModalVisible } = props;

    const onAddLeadClick = () => setIsCreateLeadModalVisible(prev => !prev);

    return (
        <div className="d-sm-flex d-flex-col mt-3 px-4 justify-content-between">
            <div className="d-flex align-items-center">
                <BiSearch size={20} className="mr-2" />
                <input className="w-100" />
            </div>

            <div className="d-flex w-100 align-items-center justify-content-end">
                <button
                    className="mt-2 mt-sm-0"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "1px solid #000",
                        borderRadius: 10,
                        padding: 5,
                        cursor: "pointer",
                    }}
                    onClick={onAddLeadClick}
                >
                    Add Lead
                    <IoMdAddCircleOutline size={20} className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default SearchHeader;
