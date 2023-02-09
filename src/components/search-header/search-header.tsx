import { BiSearch } from "react-icons/bi";

const SearchHeader = () => {
    return (
        <div className="d-sm-flex d-flex-col mt-3 px-4">
            <div className="d-flex align-items-center">
                <BiSearch size={20} className="mr-2" />
                <input className="form-control h-3" id="focusedInput" type="text" value="This is focused..." />
            </div>
        </div>
    )
};

export default SearchHeader;
