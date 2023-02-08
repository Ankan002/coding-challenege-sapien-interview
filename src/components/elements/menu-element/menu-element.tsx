interface Props {
    name: string;
}

const MenuElement = (props: Props) => {
    const { name } = props;

    return (
        <div className="mr-3">
            <span style={{
                cursor: "pointer",
                fontSize: "18px"
            }}>
                {name}
            </span>
        </div>
    )
};

export default MenuElement;
