import axios from "axios"

const api = axios.create({
    baseURL : import.meta.env.MODE,
    withCredentials: true
})

export default api
