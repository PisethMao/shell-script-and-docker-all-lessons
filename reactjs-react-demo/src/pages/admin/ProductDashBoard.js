import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { DELETE_PRODUCT_BY_ID, GET_ALL_PRODUCTS } from '../../services/productService'
import { toast } from 'react-toastify'
import { correctAllProducts, correctImageUrls, handleLongText } from '../../utils/helpers'
import { ThreeDots } from 'react-loader-spinner'
import ProductModal from '../../components/ProductModal'


const ProductDashBoard = () => {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isDeleted, setIsDeleted] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [updatedProduct,setUpdatedProduct] = useState()

    const columns = [
        {
            name: "Id",
            selector: row => row.id,
            sortable: true,
            width: '70px'
        }, {
            name: "Title",
            selector: row => row.title
        },
        {
            name: "description",
            selector: row => row.description,
            wrap: false,
            width: '500px'

        },
        {
            name: "price",
            selector: row => row.price,
            sortable: true
        },
        {
            name: "category",
            selector: row => row.category.name
        }

    ]
    useEffect(() => {
        // setIsLoading(true)
        GET_ALL_PRODUCTS()
            .then(res => {
                setProducts(correctAllProducts(res))
                console.log("All Products : ", res)
                // setSelectedProduct(res[0])
            })
            .catch(err => toast.error(err))
        // .finally(() => {
        //     setIsLoading(false)
        // })

    }, [showModal]) // can trigger to pull data here ! isDeleted

    console.log("Selected Product : ", selectedProduct)
    useEffect(() => {
        setSelectedProduct(products[0])
    }, [products])

    // 

    const handleDelete = () => {
        setIsLoading(true)
        DELETE_PRODUCT_BY_ID(selectedProduct.id)
            .then(res => {
                toast.success("Successfully Delete The Product! ")
                // setStage for marking the delete 
                setProducts(
                    products.filter(pro => pro.id != selectedProduct.id)
                )
                // setIsDeleted(!isDeleted)
                setSelectedProduct(null)
            })
            .catch((err) => toast.warning("Something went wrong! "))
            .finally(() => setIsLoading(false))

    }
    const handleUpdate = () => {
        setShowModal(true)
        setUpdatedProduct(selectedProduct)
    }


    const handleRowClicked = (data) => {
        console.log(data)
        setSelectedProduct(data)
    }
    let defaultImage = "https://www.hydroscand.se/media/catalog/product/placeholder/default/image-placeholder-base.png"

    const handleCreateProduct = () => {
        setShowModal(true)

    }
    const handleCloseProductModal = (value) => {
        setShowModal(false)
        setUpdatedProduct(null)
    } 

    // Modal 1 -> true -> onHide -> false 
    // Modal 2 
    return (
        <div className='container mt-5  '>
            <ProductModal
                showModal={showModal}
                handleCloseProductForm={handleCloseProductModal}
                updatedProduct={updatedProduct}
                />
            <div className="row">
                <div className="col-4 ">
                    {selectedProduct ? <div className="preview-card mx-2 my-3  text-center">
                        <img width={"300px"}
                            className=' img-fluid rounded'
                            src={selectedProduct.images.length == 0 ? defaultImage : selectedProduct.images[0]}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = defaultImage
                            }}
                            alt="this is product  image " />
                        <h4 className='text-center mt-2'>
                            {selectedProduct?.title}
                        </h4>
                        <p>
                            {handleLongText(selectedProduct?.description, 200)}
                        </p>

                        <div className="d-flex justify-content-around mx-2">
                            <button
                                className="btn btn-warning"
                                onClick={handleUpdate}
                            >
                                Update
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={handleDelete}
                            >
                                {isLoading ? <>
                                    <ThreeDots
                                        visible={true}
                                        height="25"
                                        width="45"
                                        color="#fff"
                                        radius="9"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                </> : "Delete"}
                            </button>
                        </div>

                    </div>
                        :
                        // placeholder for loadinggg 
                        <p className='text-center'> Pleae choose the product!</p>
                        // <></>
                    }


                </div>

                <div className="col-8 bg-light rounded py-3">
                    <div className='d-flex justify-content-between my-2'>
                        <h4> All Products </h4>
                        <button className='btn btn-success'
                            onClick={handleCreateProduct}
                        > New Product </button>
                    </div>
                    <DataTable
                        columns={columns}
                        data={products}
                        pagination
                        highlightOnHover
                        onRowClicked={handleRowClicked}

                    />
                </div>
            </div>



        </div>
    )
}

export default ProductDashBoard