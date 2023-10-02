import axios from "axios";

const api = axios.create({
    baseURL: 'postgres://EricFilipe:0AlT2WqxwMjI@ep-cold-haze-53725092.us-east-2.aws.neon.tech/neondb',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
    }
})

export default api;