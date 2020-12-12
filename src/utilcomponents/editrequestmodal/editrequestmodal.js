import React from "react";
import "./editrequestmodal.scss";
import Modal from "../modals/modal";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Form, Field, Formik } from "formik";

const requestSchema = () => {
    return Yup.object().shape({
        description: Yup.string()
            .min(10, "Too Short!")
            .max(230, "Too Long!")
            .required("* Required"),
    });
};

const EditRequestModal = ({ handleEditClose, description, files, status, requestID, statusID, statusList }) => {

    const onSubmit = (values) => {
        // setTimeout(() => {
        //     requireService({ description: values.description, files: [] })
        //         .then((response) => {
        //             if (response.success) {
        //                 console.log(response);
        //                 addRequest(response.data);
        //                 handleClose();
        //             }
        //         })
        //         .catch((error) => {
        //             alert("error while adding you request... retry");
        //         })
        //         .then(() => { });
        // }, 600);
    };

    return (
        <Modal show={true}>
            <div className="modal-title-edit">Edit Request</div>
            <div className="modal-body">
                <Formik
                    initialValues={{
                        description: description,
                        status: status
                    }}
                    validationSchema={requestSchema()}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="input-lable">
                                <label>Description </label>
                                <Field component="textarea" className="input-text" name="description" cols="45" rows="3" />
                                {touched.description && errors.description && <p className="signinformerror">{errors.description}</p>}
                            </div>
                            <div className="input-lable">
                                <label>Status </label>
                                <Field className="requestStatus" component="select" name="status">
                                    {statusList.map((status) => {
                                        return <option key={status._id} value={status.description}>{status.description}</option>
                                    })}
                                </Field>
                            </div>
                            <div className="input-lable">
                                <label>Attach</label>
                                <input type="file" className="fileuploadinput" />
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