interface Props {
    withMargin: boolean;
}

const CustomHr = (props: Props) => {
    const { withMargin } = props;

    return (
        <hr style={{
            margin: 0,
            marginLeft: withMargin ? "10px" : "0px",
            marginRight: withMargin ? "10px" : "0px",
            backgroundColor: "#BDCDD6"
        }} />
    )
};

export default CustomHr;
