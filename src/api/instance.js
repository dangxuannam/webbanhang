import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3899",

});
export default instance;