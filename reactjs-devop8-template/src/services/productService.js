import { api } from "../utils/api"

// create, update, delete , getAllProduct 
export const GET_ALL_PRODUCTS = async (currentPage, itemPerPage) => {
    let url = 'products'
    if (currentPage && itemPerPage) {
        let offset = (currentPage - 1) * itemPerPage;
        url = `products?offset=${offset}&limit=${itemPerPage}`
    }
    let response = await api.get(url)
    return response.data
}

export const DELETE_PRODUCT_BY_ID = async (id) => {
    let response = await api.delete(`products/${id}`)
    return response;
}

export const GET_PRODUCT_BY_ID = async (id) => {
    let response = await api.get(`products/${id}`)
    return response.data
}

export const CREATE_PRODUCT = async (product) => {
    let response = await api.post("products", product)
    return response
}

export const UPDATE_PRODUCT_BY_ID = async (id, product) => {
    let response = await api.put(`products/${id}`, product)
    return response.data
}