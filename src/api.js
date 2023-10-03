import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-portifolio-imu2s1kaq-ericfilipe.vercel.app',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
    }
})

export default api;