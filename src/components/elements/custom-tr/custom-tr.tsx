import { Lead } from "../../../types/lead";

interface Props {
    lead: Lead;
}

const CustomTr = (props: Props) => {
    const { lead } = props;

    return (
        <tr>
            <td
                style={{
                    textAlign: "center",
                    fontWeight: 500,
                    fontSize: 15,
                }}
            >
                {lead.attributes.date ? lead.attributes.date : "None"}
                <br />
                {lead.attributes.Time ? lead.attributes.Time : "None"}
            </td>
            <td
                style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: 500,
                }}
            >
                {lead.attributes.Name ? lead.attributes.Name : "None"}
            </td>
            <td
                style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: 500,
                }}
            >
                {lead.attributes.email ? lead.attributes.email : "None"}
            </td>
            <td
                style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: 500,
                }}
            >
                {lead.attributes.Source
                    ? lead.attributes.Source
                    : "None"}
            </td>
            <td
                style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: 500,
                }}
            >
                {lead.attributes.updatedAt
                    ? lead.attributes.updatedAt.split("T")[0]
                    : "None"}
            </td>
            <td>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            fontSize: 15,
                            fontWeight: 500,
                            border: "1px solid #000",
                            borderRadius: "5px",
                            width: "80px",
                            paddingLeft: 2,
                            paddingRight: 2,
                            backgroundColor: "#F0EEED",
                        }}
                    >
                        {lead.attributes.Status
                            ? lead.attributes.Status
                            : "None"}
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default CustomTr;
