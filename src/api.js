import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-portifolio-1w9arr1mh-ericfilipe.vercel.app/usermessage',
    headers: {
        "Access-Control-Allow-Origin": "https://api-portifolio-1w9arr1mh-ericfilipe.vercel.app/usermessage",
        "Content-Type": 'application/json'
    }
})

export default api;