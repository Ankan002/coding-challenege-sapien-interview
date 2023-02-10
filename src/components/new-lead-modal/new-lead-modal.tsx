import { Modal } from "react-bootstrap";
import { Dispatch, SetStateAction, useState } from "react";
import { CustomHr } from "../elements";
import { ModalInput } from "../elements/modal-input";
import { Lead } from "../../types/lead";
import { useMutation } from "@apollo/client";
import { CREATE_LEAD_MUTATION } from "../../graphql/mutations";
import { toast } from "react-hot-toast";
import { validateEmail } from "../utils/validate-email";
import moment from "moment";

interface Props {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setLeads: Dispatch<SetStateAction<Array<Lead>>>
}

const NewLeadModal = (props: Props) => {
    const { isOpen, setOpen, setLeads } = props;

    const [selectedSource, setSelectedSource] = useState<string>("website");
    const [selectedStatus, setSelectedStatus] = useState<string>("New");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [notes, setNotes] = useState<string>("");
    const [isSaving, setIsSaving] = useState<boolean>(false);

    const [ createLead ] = useMutation(CREATE_LEAD_MUTATION);

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

        const currentDate = moment().format("YYYY-MM-DD");
        const currentTime = moment().format("HH:mm:ss:SSS");

        const { data, errors } = await createLead({
            variables: {
                data: {
                    Name: name.trim(),
                    email: email.trim(),
                    Source: selectedSource,
                    Status: selectedStatus,
                    Time: currentTime,
                    date: currentDate,
                    Notes: notes.trim().length > 1 ? notes.trim() : null
                }
            }
        });

        toast.remove(loadingToastId);
        setIsSaving(false);

        if(errors) {
            toast.error(errors[0].message);
            return;
        }

        setName("");
        setEmail("");
        setSelectedSource("website");
        setSelectedStatus("New");
        setNotes("");

        if(data.createLead.data) {
            setLeads((leads) => [data.createLead.data, ...leads]);
            toast.success("Successfully created Lead!!");
            setOpen(false);
        }

        toast.success("Lead Created!!");
    }

    return (
        <Modal show={isOpen} onHide={() => setOpen(false)}>
            <Modal.Header className="bg-dark">
                <Modal.Title className="text-light">Create a Lead</Modal.Title>
            </Modal.Header>

            <Modal.Body className="px-2">
                <h4>Status</h4>

                <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    style={{
                        padding: 5,
                        border: "1px solid #000",
                        borderRadius: 5,
                    }}
                >
                    <option value="New" label="New">
                        New
                    </option>
                    <option value="Interested" label="Interested">
                        Interested
                    </option>
                    <option value="Follow_up" label="Follow Up">
                        Follow Up
                    </option>
                    <option value="Negative" label="Negative">
                        Negative
                    </option>
                    <option value="Enrolled" label="Enrolled">
                        Enrolled
                    </option>
                </select>

                <h4 className="mt-4">Source</h4>

                <select
                    value={selectedSource}
                    onChange={(e) => setSelectedSource(e.target.value)}
                    style={{
                        padding: 5,
                        border: "1px solid #000",
                        borderRadius: 5,
                    }}
                >
                    <option value="website" label="Website">
                        Website
                    </option>
                    <option value="google" label="Google">
                        Google
                    </option>
                    <option value="my_app" label="My App">
                        My App
                    </option>
                    <option value="word_of_mouth" label="Word Of Mouth">
                        Word Of Mouth
                    </option>
                </select>

                <h4 className="mt-5">Lead Details</h4>

                <CustomHr withMargin={false} />

                <ModalInput 
                    title="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" editable={true}
                />

                <ModalInput 
                    title="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ankanbhattacharya89@gmail.com" editable={true}
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
                    onChange={e => setNotes(e.target.value)}
                ></textarea>
            </Modal.Body>

            <Modal.Footer className="w-100 d-flex align-items-center justify-content-center">
                <button className="btn btn-success rounded w-25" onClick={onSaveLeadClick}>
                    Save
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewLeadModal;
