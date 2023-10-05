import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-portifolio-qc7hbkrs5-ericfilipe.vercel.app',
    headers: {
        "Access-Control-Allow-Origin": "https://api-portifolio-qc7hbkrs5-ericfilipe.vercel.app",
        "Content-Type": 'application/json'
    }
})

export default api;