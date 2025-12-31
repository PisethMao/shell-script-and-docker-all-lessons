import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faTrash, faWarning } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple, faCrow, faGear, faTreeCity, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    FaBox,
    FaCross,
    FaEnvelope,
    FaFacebook,
    FaInfo,
    FaKey,
    FaMoneyBill,
    FaSearch,
    FaTrash,
    FaUser,
    FaXbox,
} from "react-icons/fa";
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { CREATE_PRODUCT, UPDATE_PRODUCT_BY_ID } from '../services/productService';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';
import { UPLOAD_FILE } from '../services/fileService';
const ProductModal = ({ updatedProduct, showModal, handleCloseProductForm }) => {

    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    // for fileupload 
    const [selectedFile, setSelectedFile] = useState(null)
    const [allFiles, setAllFiles] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [allImageUrls, setAllImageUrls] = useState([])
    let defaultImage = "https://cdn3d.iconscout.com/3d/premium/thumb/image-6073772-4996992.png"



    useEffect(() => {
        setTitle(updatedProduct?.title)
        setDescription(updatedProduct?.description)
        setPrice(updatedProduct?.price)
        setSelectedImage(updatedProduct?.images?.length > 0 ? updatedProduct.images[0] : null)
        setAllImageUrls(updatedProduct?.images ? updatedProduct.images : [])
    }, [updatedProduct])


    const handleProductClose = () => {
        handleCloseProductForm(false)
    }
    let product = {
        title,
        price: parseFloat(price),
        description,
        categoryId: updatedProduct?.category?.id ?
            updatedProduct.category.id
            : 2,
        images: allImageUrls.length > 0 ? allImageUrls : new Array()
    }
    const handleCreateNewProduct = async () => {
        setIsLoading(true);
        try {
            let imageResponses;
            if (allFiles.length === 0) {
                if (updatedProduct && updatedProduct.images.length > 0)
                    imageResponses = updatedProduct.images;
                else
                    imageResponses = [defaultImage];
            } else {
                imageResponses = await Promise.all(
                    allFiles.map(async (file) => {
                        let formData = new FormData();
                        formData.append("file", file);
                        const response = await UPLOAD_FILE(formData);
                        return response.location;
                    })
                );
            }
            product.images = imageResponses;
            const res = updatedProduct ?
                await UPDATE_PRODUCT_BY_ID(updatedProduct.id, product)
                : await CREATE_PRODUCT(product);

            toast.success("Successfully "+(updatedProduct? "Update  ":"Create") + " Product!");
        } catch (err) {
            console.log("ERROR : ", err);
            toast.error("Failed to "+(updatedProduct? "Update  ":"Create") + " Product!");
        } finally {
            setIsLoading(false);
        }
    };
    const handleImageChange = (e) => {
        let allInputFiles = [...e.target.files]
        setAllFiles(allInputFiles) // save files that user input 
        setSelectedFile(allInputFiles[0])
        let imageUrl = URL.createObjectURL(allInputFiles[0])
        setSelectedImage(imageUrl)
        setAllImageUrls(allInputFiles.map(file => URL.createObjectURL(file)))
    }



    const handleSmallImageClicked = (event) => {
        // console.log("event : ",event.target.src)
        setSelectedImage(event.target.src)

    }

    const handleOnImageRemoved = (index) => {
        let newArray = [...allImageUrls]
        newArray.splice(index, 1)
        let newFiles = [...allFiles]
        newFiles.splice(index, 1)

        if (newArray.length >= 1) {
            setSelectedImage(newArray[0])
        } else {
            setSelectedImage(defaultImage)
        }
        setAllImageUrls(newArray)
        setAllFiles(newFiles)
    }

    return (
        showModal &&
        <Modal size="xl" show={showModal} onHide={handleProductClose}


        >
            <Modal.Header closeButton={false}>
                <Modal.Title className="m-auto">
                    {updatedProduct ?
                        "Update Product Information " :
                        "Create New Product "
                    }


                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="img-side w-50">
                        <label htmlFor="file-input">
                            <img
                                id="preview-image"
                                className="img-fluid img-thumbnail"
                                width="400px "
                                src={

                                    selectedImage ?
                                        selectedImage :
                                        "https://cdn3d.iconscout.com/3d/premium/thumb/image-6073772-4996992.png"
                                }
                                alt="Profile Picture"
                            />
                        </label>
                        {/* here we listing a smaller images  */}
                        <div className="more-images">
                            <div className="d-flex justify-content-center align-items-center">
                                {
                                    allImageUrls?.map((urlString, index) => (
                                        <div className="d-flex justify-content-center align-items-center position-relative">
                                            <img

                                                className="img-fluid img-thumbnail"
                                                width="50px "
                                                src={urlString}
                                                alt="Profile Picture"
                                                onClick={handleSmallImageClicked}
                                            />
                                            <div

                                                className=" position-absolute"
                                                style={{ top: '-15px', right: '-5px' }}>


                                                <button className="btn btn-danger btn-sm   rounded-circle"
                                                    onClick={
                                                        () => handleOnImageRemoved(index)
                                                    }
                                                >
                                                    <FontAwesomeIcon icon={faBan} />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }







                            </div>
                        </div>
                        {/* d-none */}
                        <input
                            className="form-control d-none "
                            type="file"
                            name=""
                            onChange={handleImageChange}
                            id="file-input"
                            multiple
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
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}


                                />
                                <label for="floatingInput" className="input-label">
                                    <div className="d-flex align-items-center">
                                        <FaBox />
                                        <span className="ms-2"> Produce Title  </span>
                                    </div>
                                </label>
                            </div>
                            <div class="form-floating  ">
                                <input
                                    type="number"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="Jonh Doe"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}


                                />
                                <label for="floatingInput" className="input-label">
                                    <div className="d-flex align-items-center">
                                        <FaMoneyBill />
                                        <span className="ms-2"> Produce Price  </span>
                                    </div>
                                </label>
                            </div>


                        </div>


                        <div class="form-floating mb-3  ">
                            <textarea
                                cols={3}
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                placeholder="name@example.com"
                                style={{ height: "170px" }}

                            ></textarea>
                            <label for="floatingInput" className="input-label">
                                <div className="d-flex align-items-center">
                                    <FaInfo />
                                    <span className="ms-2"> Product Description </span>
                                </div>
                            </label>
                        </div>





                        <Button
                            variant={updatedProduct ? "warning" : "success"}
                            className="w-100 mt-2 mb-5   "
                            onClick={handleCreateNewProduct}

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
                                    <>
                                        {
                                            updatedProduct ?
                                                "Update Product"
                                                :
                                                "Create Product"
                                        }
                                    </>
                            }



                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ProductModal