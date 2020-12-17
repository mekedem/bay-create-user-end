import React, { useState } from "react";
import "./editrequestmodal.scss";
import Modal from "../modals/modal";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Form, Field, Formik } from "formik";
import { MdClear } from "react-icons/md";
import { updateServiceRequest } from "../../actions/serviceReqAction";
import { editRequestService } from "../../API/serviceRequestAPI";
import MaterialDropZone from "../filehandlerform/materialdropzone";

const requestSchema = () => {
    return Yup.object().shape({
        description: Yup.string()
            .min(10, "Too Short!")
            .max(230, "Too Long!")
            .required("* Required"),
    });
};

const EditRequestModal = ({ handleEditClose, description, existingfiles, status, requestID, statusID, statusList, updateRequest }) => {

    const [files, setFiles] = useState([]);
    const [uploadedfiles, setuploadedfiles] = useState(existingfiles);

    const removeExistingFile = (rfilename) => {
        const tempfiles = uploadedfiles.filter(({ filename }) => filename !== rfilename);
        setuploadedfiles(tempfiles);
    }

    const onSubmit = (values) => {
        setTimeout(() => {
            editRequestService({ description: values.description, files: files, statusID: values.status, requestID: requestID })
                .then((response) => {
                    if (response.success) {
                        updateRequest(response.data);
                        handleEditClose();
                    }
                })
                .catch((error) => {
                    alert("error while editing your request... retry");
                    console.log(error);
                })
                .then(() => { });
        }, 600);
    };

    return (
        <Modal show={true}>
            <div className="modal-title-edit">Edit Request</div>
            <div className="modal-body">
                <Formik
                    initialValues={{
                        description: description,
                        status: statusID
                    }}
                    validationSchema={requestSchema()}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="input-lable">
                                <label>Description </label>
                                <Field component="textarea" className="input-text" name="description" cols="47" rows="3" />
                                {touched.description && errors.description && <p className="signinformerror">{errors.description}</p>}
                            </div>
                            <div className="input-lable">
                                <label>Status </label>
                                <Field className="requestStatus" component="select" name="status">
                                    {statusList.map((statusitem) => {
                                        return <option key={statusitem._id} value={statusitem._id}>{statusitem.description}</option>
                                    })}
                                </Field>
                            </div>
                            <div className="prev-files">
                                {uploadedfiles.map((uploadedfile) => {
                                    return <div className="prev-uploaded" onClick={() => removeExistingFile(uploadedfile.filename)}>{uploadedfile.filename} <span id="iconid"><MdClear /></span></div>
                                })}
                            </div>
                            <div className="input-lable">
                                <label>Attach</label>
                                <MaterialDropZone name="file" setFiles={setFiles} files={files} />
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="modalcancelbtn"
                                    onClick={() => { handleEditClose(false) }}>
                                    Cancel
                </button>
                                <button
                                    className="modalsubmitbtn"
                                    type="submit">
                                    Submit Request
                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    );
}


const mapStateToProps = (state) => {
    return {
        statusList: state.authenticationRed.statusList,
    };
};

export default connect(mapStateToProps)(EditRequestModal);