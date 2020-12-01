import React, { useState } from "react";
import "./servicemodal.scss";
import Modal from "../modals/modal";

const requestServiceModal = () => {

    return (
        <Modal show={true}>
            <div className="modal-title">Add Request</div>
            <div className="modal-body">
                <form>
                    <div className="modal-footer">
                        <button
                            variant="outlined"
                            size="l"
                            onClick={() => { }}>
                            Cancel
                </button>
                        <button
                            variant="primary"
                            size="l"
                            type="submit">
                            Submit Request
                </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default requestServiceModal