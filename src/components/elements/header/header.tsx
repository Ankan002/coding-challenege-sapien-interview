interface Props {
    heading: string
}

const Header = (props: Props) => {
    const { heading } = props;

    return (
        <h1 className="text-md-start px-4 mt-2 fw-bolder">
            {heading}
        </h1>
    )
};

export default Header;
