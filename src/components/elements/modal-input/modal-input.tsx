import { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface Props {
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    placeholder: string;
    editable: boolean;
    type?: HTMLInputTypeAttribute;
}

const ModalInput = (props: Props) => {
    const { value, onChange, title, placeholder, editable, type } = props;

    return (
        <>
            <h5 className="mt-3">{title}</h5>

            <input
                className="w-100"
                style={{
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    border: "1px solid #000",
                    borderRadius: 5,
                }}
                placeholder={placeholder}
                contentEditable={editable}
                type={type}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default ModalInput;
