import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://mgmt-second.onrender.com",
});

export default axiosInstance;