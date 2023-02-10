import { useMutation } from "@apollo/client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import { UPDATE_LEAD_MUTATION } from "../../graphql/mutations";
import { Lead } from "../../types/lead";
import { CustomHr, ModalInput } from "../elements";
import { validateEmail } from "../utils/validate-email";

interface Props {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setLeads: Dispatch<SetStateAction<Array<Lead>>>;
    lead: Lead;
}

const UpdateLeadModal = (props: Props) => {
    const { isOpen, setOpen, setLeads, lead } = props;

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [notes, setNotes] = useState<string>("");
    const [isSaving, setIsSaving] = useState<boolean>(false);

    const [ updateLead ] = useMutation(UPDATE_LEAD_MUTATION);

    const onSaveLeadClick = async () => {
        if(isSaving) return;

        setIsSaving(true);
        const loadingToastId = toast.loading("Saving the document");

        if(name.trim().length < 3) {
            toast.remove(loadingToastId);
            toast.error("Enter a name!!");

            setIsSaving(false);
            return;
        }

        if(!validateEmail(email.trim())){
            toast.remove(loadingToastId);
            toast.error("Enter a valid email!!");

            setIsSaving(false);
            return;
        }

        const {data, errors} = await updateLead({
            variables: {
                id: lead.id,
                data: {
                    Name: name,
                    email: email,
                    Notes: notes
                }
            }
        });

        toast.remove(loadingToastId);
        setIsSaving(false);

        if(errors) {
            toast.error(errors[0].message);
            return;
        }

        setLeads(prevLeads => {
            const newLeads = prevLeads.map((prevLead) => {
                if(lead.id === prevLead.id && data.updateLead.data) return data.updateLead.data
                return prevLead;
            });

            return newLeads;
        });

        setOpen(false);

        toast.success("Lead Updated!!");
    };

    useEffect(() => {
        if (lead.attributes.Name) setName(lead.attributes.Name);
        if (lead.attributes.email) setEmail(lead.attributes.email);
        if (lead.attributes.Notes) setNotes(lead.attributes.Notes);
    }, [lead]);

    return (
        <Modal show={isOpen} onHide={() => setOpen(false)}>
            <Modal.Header className="bg-dark">
                <Modal.Title className="text-light">Edit Lead</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4 className="mt-5">Lead Details</h4>

                <CustomHr withMargin={false} />

                <ModalInput
                    title="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    editable={true}
                />

                <ModalInput
                    title="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ankanbhattacharya89@gmail.com"
                    editable={true}
                    type="email"
                />

                <h5 className="mt-3">Notes</h5>

                <textarea
                    rows={5}
                    className="w-100"
                    style={{
                        paddingRight: "10px",
                        paddingLeft: "10px",
                        border: "1px solid #000",
                        borderRadius: 5,
                    }}
                    placeholder="Enter the notes here..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                ></textarea>
            </Modal.Body>

            <Modal.Footer className="w-100 d-flex align-items-center justify-content-center">
                <button
                    className="btn btn-success rounded w-25"
                    onClick={onSaveLeadClick}
                >
                    Save
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateLeadModal;
