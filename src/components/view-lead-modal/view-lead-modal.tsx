import { Dispatch, SetStateAction } from "react";
import { Modal } from "react-bootstrap";
import { Lead } from "../../types/lead";
import { CustomHr, ModalInput } from "../elements";

interface Props {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    lead: Lead;
}

const ViewLeadModal = (props: Props) => {
    const { isOpen, setOpen, lead } = props;

    return (
        <Modal show={isOpen} onHide={() => setOpen(false)}>
            <Modal.Header className="bg-dark">
                <Modal.Title className="text-light">Lead</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Status</h4>

                <div
                    style={{
                        padding: 5,
                        border: "1px solid #000",
                        borderRadius: 5,
                        width: "40%"
                    }}
                >
                    {lead.attributes.Status ? lead.attributes.Status : "None"}
                </div>

                <h4 className="mt-4">Source</h4>

                <div
                    style={{
                        padding: 5,
                        border: "1px solid #000",
                        borderRadius: 5,
                        width: "40%"
                    }}
                >
                    {lead.attributes.Source ? lead.attributes.Source : "None"}
                </div>

                <h4 className="mt-5">Lead Details</h4>

                <CustomHr withMargin={false} />

                <ModalInput
                    value={lead.attributes.Name ?? "Not Given"}
                    editable={false}
                    title="Name"
                    placeholder="Enter your name"
                />

                <ModalInput
                    value={lead.attributes.email ?? "Not Given"}
                    editable={false}
                    title="Email"
                    placeholder="ankanbhattacharya89@gmail.com"
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
                    contentEditable={false}
                    value={
                        lead.attributes.Notes
                            ? lead.attributes.Notes
                            : "No notes added"
                    }
                ></textarea>
            </Modal.Body>

            <Modal.Footer className="w-100 d-flex align-items-center justify-content-end">
                <button
                    className="btn btn-warning rounded w-25"
                    onClick={() => setOpen(false)}
                >
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default ViewLeadModal;
