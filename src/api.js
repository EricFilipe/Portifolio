import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-portifolio-erpqt8sjl-ericfilipe.vercel.app/userdata',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
    }
})

export default api;