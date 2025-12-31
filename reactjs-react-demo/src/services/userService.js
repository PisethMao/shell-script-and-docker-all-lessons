import { api } from "../utils/api"
export const CREATE_NEW_USER = async (user) => {
    const response = await api.post("users", user)
    return response.data

}

export const GET_OWN_PROFILE = async () => {
    const response = await api.get("auth/profile")
    return response.data
}