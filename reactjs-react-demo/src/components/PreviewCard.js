import React, { useState } from 'react'
import { DELETE_PRODUCT_BY_ID } from '../services/productService'
import { toast } from 'react-toastify'
import { ThreeDots } from 'react-loader-spinner'
import {handleLongText} from '../utils/helper'
const PreviewCard = ({ product, onDelete , onUpdate}) => {
    
    const [isLoading, setIsLoading] = useState(false)

    const handleUpdateProduct =()=>{
        onUpdate(product)

    }
    const handleDeleteProduct = () => {
         setIsLoading(true)

    
        DELETE_PRODUCT_BY_ID(product.id)
            .then(response => {
                toast.success(" Successfully Deleted ")
                onDelete(product.id) // add it here 
                setIsLoading(false)
                
            })
            .catch(error => {
                toast.error("Failed to Delete !! ")
                console.log("Error Delete : ", error)
                setIsLoading(false)
            })
    }
    return (
        <div className='bg-light pb-4 rounded '>

            <img
                className='img-fluid pb-2'
                src={product?.images?.length > 0 ? product.images[0]
                    : "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png"}

                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png"

                }}
                alt=" item image " />

            <div className='px-2 text-center'>
                <h3 > {handleLongText(product?.title,25)} </h3>
                <hr />
                <p  > {
                 handleLongText(product?.description, 100) }
               </p>

                <div className='d-flex justify-content-around'>
                    <button
                        className=" btn btn-warning"
                        onClick={handleUpdateProduct}
                    > Update </button>
                    <button
                        className="btn btn-danger"
                        onClick={handleDeleteProduct}
                    >

                        {
                            isLoading ?
                                <>
                                    <ThreeDots

                                        height="32"
                                        width="32"
                                        radius="9"
                                        color="white"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{ paddingLeft: "10px", paddingRight: "10px" }}
                                        wrapperClassName=""
                                        visible={true}
                                    />
                                </> :
                                " Delete "
                        }



                    </button>
                </div>

            </div>

        </div>
    )
}

export default PreviewCard