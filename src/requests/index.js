import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://mgmt-0597.onrender.com",
});

export default axiosInstance;