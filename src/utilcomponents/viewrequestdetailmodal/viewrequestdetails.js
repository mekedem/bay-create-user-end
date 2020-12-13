import React from "react";
import "./requestdetails.scss";
import Modal from "../modals/modal";
import { MdFileDownload } from 'react-icons/md';
import { getDownloadFile } from '../../API/serviceRequestAPI';
import { saveAs } from 'file-saver'

const RequestDetailsModal = ({ handleEditClose, description, files, status }) => {

    const downloadFile = (filename, fileurl) => {
        // getDownloadFile(fileurl + "/" + filename)
        //     .then(blob => saveAs(blob, './' + filename + '.jpg'))
    }

    //   return (
    //     <button type='button' onClick={downloadFile}>Download</Button>
    //   )

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
                        {files.map((file) => {
                            return <div className="downloadfiles" onClick={() => downloadFile(file.filename, file.url)}>{file.filename} <span id="iconid"><MdFileDownload /></span></div>
                        })}
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