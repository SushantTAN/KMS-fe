import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "localhost:5000/",
});

export default axiosInstance;