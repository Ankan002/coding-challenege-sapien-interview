import { Lead } from "../../../types/lead";
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { Dispatch, SetStateAction, useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_LEAD_MUTATION } from "../../../graphql/mutations";
import { ViewLeadModal } from "../../view-lead-modal";

interface Props {
    lead: Lead;
    setLeads: Dispatch<SetStateAction<Array<Lead>>>;
}

const CustomTr = (props: Props) => {
    const { lead, setLeads } = props;

    const [ deleteLead ] = useMutation(DELETE_LEAD_MUTATION);
    const [ isViewLeadModalOpen, setIsViewLeadModalOpen ] = useState<boolean>(false);

    const onDeleteClick = async () => {
        const { data, errors } = await deleteLead({
            variables: {
                id: lead.id
            }
        });

        if(errors) {
            console.log(errors);
            return;
        }

        if(data?.deletedLead?.data === null) {
            console.log("Data does not exists!!");
            return;
        }

        setLeads(prev => {
            const filteredData = prev.filter((data) => data.id !== lead.id);

            return filteredData;
        });
    }

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
                {lead.attributes.Source ? lead.attributes.Source : "None"}
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
            <td>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <BsThreeDotsVertical />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Edit</Dropdown.Item>
                        <Dropdown.Item onClick={() => setIsViewLeadModalOpen(!isViewLeadModalOpen)}>View</Dropdown.Item>
                        <Dropdown.Item onClick={onDeleteClick}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>

            <ViewLeadModal isOpen={isViewLeadModalOpen} setOpen={setIsViewLeadModalOpen} lead={lead} />
        </tr>
    );
};

export default CustomTr;
