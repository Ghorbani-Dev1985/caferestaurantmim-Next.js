import axios from "axios";

const BASE_URL = "http://localhost:4000/v1"

const Api = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type" : "application/json"}
})

Api.interceptors.request.use(
    (config) => {
        const getToken = JSON.parse(typeof window !== "undefined" ? window.localStorage.getItem("user") : false);
        if (getToken !== null) {
          config.headers.Authorization = `Bearer ${getToken.accessToken}`;
          config.headers["Content-Type"] = "application/json";
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
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