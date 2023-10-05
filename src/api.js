import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-portifolio-1w9arr1mh-ericfilipe.vercel.app',
    headers: {
        "Access-Control-Allow-Origin": "https://api-portifolio-1w9arr1mh-ericfilipe.vercel.app",
        "Content-Type": 'application/json'
    }
})

export default api;