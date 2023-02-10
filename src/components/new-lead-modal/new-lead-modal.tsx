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
import { sourceOptions, statusOptions } from "../../constants";
import Select from "react-select";

interface Props {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setLeads: Dispatch<SetStateAction<Array<Lead>>>;
}

const NewLeadModal = (props: Props) => {
    const { isOpen, setOpen, setLeads } = props;

    const [selectedStatus, setSelectedStatus] = useState({
        value: "none",
        label: "None",
    });
    const [selectedSource, setSelectedSource] = useState({
        value: "none",
        label: "None",
    });
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [notes, setNotes] = useState<string>("");
    const [isSaving, setIsSaving] = useState<boolean>(false);

    const [createLead] = useMutation(CREATE_LEAD_MUTATION);

    const onSaveLeadClick = async () => {
        if (isSaving) return;

        setIsSaving(true);
        const loadingToastId = toast.loading("Saving the document");

        if (selectedStatus.value === "none") {
            toast.remove(loadingToastId);
            toast.error("Please pick a status");

            setIsSaving(false);
            return;
        }

        if (selectedSource.value === "none") {
            toast.remove(loadingToastId);
            toast.error("Please pick a source");

            setIsSaving(false);
            return;
        }

        if (name.trim().length < 3) {
            toast.remove(loadingToastId);
            toast.error("Enter a name!!");

            setIsSaving(false);
            return;
        }

        if (!validateEmail(email.trim())) {
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
                    Source: selectedSource.value,
                    Status: selectedStatus.value,
                    Time: currentTime,
                    date: currentDate,
                    Notes: notes.trim().length > 1 ? notes.trim() : null,
                },
            },
        });

        toast.remove(loadingToastId);
        setIsSaving(false);

        if (errors) {
            toast.error(errors[0].message);
            return;
        }

        setName("");
        setEmail("");
        setSelectedSource({
            value: "none",
            label: "None",
        });
        setSelectedStatus({
            value: "none",
            label: "None",
        });
        setNotes("");

        if (data.createLead.data) {
            setLeads((leads) => [data.createLead.data, ...leads]);
            toast.success("Successfully created Lead!!");
            setOpen(false);
        }
    };

    return (
        <Modal show={isOpen} onHide={() => setOpen(false)}>
            <Modal.Header className="bg-dark">
                <Modal.Title className="text-light">Create a Lead</Modal.Title>
            </Modal.Header>

            <Modal.Body className="px-2">
                <h4>Status</h4>

                <Select
                    options={statusOptions}
                    value={selectedStatus}
                    styles={{
                        container: (base) => ({
                            ...base,
                            width: "40%",
                        }),
                    }}
                    onChange={(v) => {
                        if (v) setSelectedStatus(v);
                    }}
                />

                <h4 className="mt-4">Source</h4>

                <Select
                    options={sourceOptions}
                    value={selectedSource}
                    styles={{
                        container: (base) => ({
                            ...base,
                            width: "40%",
                        }),
                    }}
                    onChange={(v) => {
                        if (v) setSelectedSource(v);
                    }}
                />

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

export default NewLeadModal;
