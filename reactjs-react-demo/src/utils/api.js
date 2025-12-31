import axios from "axios"
export const api = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/"
})


// configure the interceptor 
api.interceptors.request.use((config) => {
    let tokensData = JSON.parse(localStorage.getItem("tokens"));
    // do this only when we have token stored in local storage
    if (tokensData && tokensData.access_token) {
        config.headers["Authorization"] = `Bearer ${tokensData.access_token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        console.log("Error : ", error)
        // 401 means it is unauthorized
        if (error.response.status === 401) {
            const authData = JSON.parse(localStorage.getItem("tokens"));

            // 
            const payload = {
                access_token: authData.access_token,
                refresh_token: authData.refresh_token,
            };

            let apiResponse = await axios.post(
                "https://api.escuelajs.co/api/v1/auth/refresh-token",
                payload
            );
            localStorage.setItem("tokens", JSON.stringify(apiResponse.data));
            error.config.headers[
                "Authorization"
            ] = `Bearer ${apiResponse.data.access_token}`;
            return axios(error.config);
        } else {
            return Promise.reject(error);
        }
    }
);