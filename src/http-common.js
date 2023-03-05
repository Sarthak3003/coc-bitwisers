import axios from "axios";


export default axios.create({
    baseURL: "https://a86a-42-106-240-112.in.ngrok.io",

    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    mode: "cors"
});