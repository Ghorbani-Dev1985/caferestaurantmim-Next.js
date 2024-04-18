import axios from "axios";

const BASE_URL = "/api/"

const Api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

Api.interceptors.request.use(
    res => res,
    err => Promise.reject(err)
)

Api.interceptors.response.use(
    res => res,
)

const Http = {
    get: Api.get,
    post: Api.post,
    delete: Api.delete,
    put: Api.put,
    patch: Api.patch,
}

export default Http;