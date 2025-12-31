import React, { useContext, useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple, faCrow, faGear, faTreeCity, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    FaEnvelope,
    FaFacebook,
    FaKey,
    FaSearch,
    FaUser,
} from "react-icons/fa";
import * as Yup from 'yup'
// import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Formik, Field, Form, ErrorMessage } from "formik";
import AuthContext from './shared/AuthContext';
const UserSignInModal = ({ showSignIn, handleCloseSignIn }) => {

    const { login } = useContext(AuthContext)

    const [isLoading, setIsLoading] = useState(true)
    const [selectedImage, setSelectedImage] = useState(null)

    const handleImageChange = (e) => {
        const selected = e.target.files[0];
    }

    const handleLogin = (values) => {
        let email = values.email
        let password = values.password
        login(email, password)

    }

    //  define what we want to validate on the form ( constraints )

    const signInSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });


    return (
        showSignIn && <Modal size="lg" show={showSignIn} onHide={handleCloseSignIn}>
            <Modal.Header closeButton={false}>
                <Modal.Title className="m-auto">Login  </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="d-flex w-100   ms-3 flex-column">

                        <Formik
                            initialValues={{
                                email: "",
                                password: ""
                            }}
                            validationSchema={signInSchema}
                            onSubmit={
                                (values) => {
                                    // values.email
                                    // values.password
                                    handleLogin(values)
                                }
                            }
                        >

                            {({ handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isValid,
                                errors, }) => (
                                <Form noValidate >
                                    <div className="d-flex mb-3   align-items-center justify-content-between">
                                        <div className="form-floating w-100">
                                            <Field
                                                type="text"
                                                name="email"
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="John Doe"
                                                isValid={touched.email && !errors.email}
                                                isInvalid={!!errors.email}
                                            />
                                            <label htmlFor="floatingInput" className="input-label">
                                                <div className="d-flex align-items-center">
                                                    <FaUser />
                                                    <span className="ms-2">Email</span>
                                                </div>
                                            </label>
                                            <ErrorMessage name="email" component={"div"} className='text-danger' />
                                        </div>


                                    </div>
                                    <div class="form-floating">
                                        <Field
                                            name="password"
                                            type="password"
                                            class="form-control"
                                            id="floatingPassword"
                                            placeholder="Password"
                                            isValid={touched.password && !errors.password}
                                            isInvalid={!!errors.password}

                                        />

                                        <label for="floatingPassword">
                                            <div className="d-flex align-items-center">
                                                <FaKey />
                                                <span className="ms-2">Password</span>
                                            </div>
                                        </label>
                                        <ErrorMessage name="password" component={"div"} className='text-danger' />
                                    </div>
                                    <Button
                                        variant="warning"
                                        className="w-100 mt-2 mb-5   "
                                        type='submit'
                                        disabled={!isValid}
                                    >
                                        Login
                                    </Button>
                                </Form>
                            )}

                        </Formik>



                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default UserSignInModal