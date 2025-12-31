import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
    FaEnvelope,
    FaKey,
    FaUser,
} from "react-icons/fa";
import { UPLOAD_FILE } from '../services/fileService';
import { CREATE_NEW_USER } from '../services/userService';
import { toast } from 'react-toastify'
import { ThreeDots } from 'react-loader-spinner';

//  this modal is used to create new user
const UserSignUpModal = ({ showSignUp, handleCloseSignUp }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [role, setRole] = useState("admin")
    const [avatar, setAvatar] = useState("")

    const userObject = {
        email: email,
        password: password,
        name: name,
        role: role,
        avatar: avatar
    }

    //console.log("User OBject is : ", userObject)

    let defaultImage = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"

    const handleImageChange = (e) => {
        const selected = e.target.files[0];
        setSelectedFile(selected) // saved for the file upload later ! 
        setSelectedImage(URL.createObjectURL(selected));
    }



    const handleCreateUser = async () => {
        setIsLoading(true)
        let avatarUrl
        if (selectedFile) {
            try {
                const formData = new FormData();
                formData.append("file", selectedFile);
                let imageResponse = await UPLOAD_FILE(formData)
                avatarUrl = imageResponse.location
            } catch (error) {
                console.log("Error uploading image : ", error)
            }
        } else {
            avatarUrl = defaultImage
        }
        setAvatar(avatarUrl)
        const userObjectWithAvatar = { ...userObject, avatar: avatarUrl };
     //   console.log("This is the value fo the user : ", userObject)
        // create the user here 
        try {
            await CREATE_NEW_USER(userObjectWithAvatar)
            toast.success("User Created Successfully ! ")
        } catch (error) {
            console.log("Error creating user : ", error)
            toast.error("Error creating user ! ")
        } finally {
            // close up the modal and stop the loading 
            setIsLoading(false)
            handleCloseSignUp()

        }
    }


    return (
        showSignUp && <Modal size="lg" show={showSignUp} onHide={handleCloseSignUp}>
            <Modal.Header closeButton={false}>
                <Modal.Title className="m-auto">Create New User </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="img-side">
                        <label htmlFor="file-input">
                            <img
                                id="preview-image"
                                className="img-fluid img-thumbnail"
                                width="400px "
                                src={
                                    selectedImage
                                        ? selectedImage
                                        : defaultImage
                                }
                                alt="Profile Picture"
                            />
                        </label>

                        <input
                            className="form-control d-none"
                            type="file"
                            name=""
                            onChange={handleImageChange}
                            id="file-input"
                        />
                    </div>

                    <div className="d-flex w-100   ms-3 flex-column">

                        <div className="d-flex mb-3   align-items-center justify-content-between">
                            <div class="form-floating  ">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="Jonh Doe"
                                    value={name}
                                    onChange={e => setName(e.target.value)}

                                />
                                <label for="floatingInput" className="input-label">
                                    <div className="d-flex align-items-center">
                                        <FaUser />
                                        <span className="ms-2"> Username </span>
                                    </div>
                                </label>
                            </div>
                            <div className='d-flex align-items-center  w-50'>
                                <label className="form-label mx-3">Role</label>
                                <select
                                    className="form-select "
                                    value={role}
                                    onChange={e => setRole(e.target.value)}
                                    aria-label="Default select example"
                                >

                                    <option selected value="admin">Admin</option>
                                    <option value="customer">Customer</option>
                                </select>

                            </div>

                        </div>


                        <div class="form-floating mb-3 ">
                            <input
                                type="email"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}

                            />
                            <label for="floatingInput" className="input-label">
                                <div className="d-flex align-items-center">
                                    <FaEnvelope />
                                    <span className="ms-2"> Email address</span>
                                </div>
                            </label>
                        </div>

                        <div class="form-floating">
                            <input
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}

                            />
                            <label for="floatingPassword">
                                <div className="d-flex align-items-center">
                                    <FaKey />
                                    <span className="ms-2">Password</span>
                                </div>
                            </label>
                        </div>

                        <Button
                            variant="warning"
                            className="w-100 mt-2 mb-5   "
                            // onClick={handleCloseSignUp}
                            onClick={handleCreateUser}

                        >

                            {

                                isLoading ?
                                    <>
                                        <div className="d-flex justify-content-center">
                                            <ThreeDots
                                                height="32"
                                                width="32"
                                                radius="9"
                                                color="#fff"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                wrapperClassName=""
                                                visible={true}
                                            />
                                        </div>
                                    </>
                                    :
                                    <> Create User </>
                            }






                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default UserSignUpModal