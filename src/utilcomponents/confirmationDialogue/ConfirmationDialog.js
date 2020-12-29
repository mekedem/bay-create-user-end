import React from "react";
import Modal from "../modals/modal";

import "./ConfirmationDialog.scss";

export const ConfirmationDialog = ({
    show,
    message,
    cancelBtnTitle,
    comfirmBtnTitle,
    onComfirmation,
    onDeny,
}) => {
    const onDenied = () => {
        onDeny();
    };

    const onConfirmed = () => {
        onComfirmation();
    };

    return (
        <Modal show={show}>
            <div className="comfirmation-msg">{message}</div>
            <div className="modal-footer-btns">
                <button className="dialogebtndeny" onClick={onDenied}>
                    {cancelBtnTitle}
                </button>
                <button className="dialogebtnconfirm" onClick={onConfirmed}>
                    {comfirmBtnTitle}
                </button>
            </div>
        </Modal>
    );
};
