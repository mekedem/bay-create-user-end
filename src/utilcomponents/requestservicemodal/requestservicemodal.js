import React, { useState } from "react";
import "./servicemodal.scss";
import Modal from "../modals/modal";
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import { requireService } from "../../API/serviceRequestAPI";
import MaterialDropZone from "../filehandlerform/materialdropzone";


const requestSchema = () => {
    return Yup.object().shape({
        description: Yup.string()
            .min(10, "Too Short!")
            .max(230, "Too Long!")
            .required("* Required"),
    });
};



const RequestServiceModal = ({ handleClose, addRequest }) => {

    const [files, setFiles] = useState([]);

    const onSubmit = (values) => {
        setTimeout(() => {
            requireService({ description: values.description, files: files })
                .then((response) => {
                    if (response.success) {
                        addRequest(response.data);
                        handleClose();
                    }
                })
                .catch((error) => {
                    alert("error while adding you request... retry");
                })
                .then(() => { });
        }, 600);
    };

    return (
        <Modal show={true}>
            <div className="modal-title">Add Request</div>
            <div className="modal-body">
                <Formik
                    initialValues={{
                        description: ""
                    }}
                    validationSchema={requestSchema()}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="input-lable">
                                <label>Description </label>
                                <Field component="textarea" className="input-text" name="description" cols="45" rows="2" />
                                {touched.description && errors.description && <p className="signinformerror">{errors.description}</p>}
                            </div>
                            <div className="input-lable">
                                <label>Status </label>
                                <Field className="requestStatus" component="select" name="status" placeholder="requesting">
                                    <option key="b" value="a">Initial Request</option>
                                </Field>
                            </div>
                            <div className="input-lable">
                                <label>Attach</label>
                                <MaterialDropZone name="file" setFiles={setFiles} files={files} />
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="modalcancelbtn"
                                    onClick={() => handleClose()}>
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

export default RequestServiceModal