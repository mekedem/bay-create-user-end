import React from "react";
import "./requestdetails.scss";
import Modal from "../modals/modal";
import { MdFileDownload } from 'react-icons/md';


const RequestDetailsModal = ({ handleEditClose, description, files, status }) => {

    return (
        <Modal show={true}>
            <div className="modal-title-edit">Request Details</div>
            <div className="modal-body">
                <form>
                    <div className="input-lable">
                        <label>Description </label>
                        <span className="desctext"> {description}</span>
                    </div>
                    <div className="input-lable">
                        <label>Status </label>
                        <span className="desctext"> {status}</span>
                    </div>
                    <div className="input-lable">
                        <label>Files </label>
                        <button class="downloadfiles">file - 1 <span id="iconid"><MdFileDownload /></span></button>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="modalcancelbtn"
                            onClick={() => { handleEditClose(false) }}>
                            Back
                            </button>
                    </div>
                </form>

            </div>
        </Modal>
    );
}

export default RequestDetailsModal;