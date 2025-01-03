import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: '56aea8e1cba545bdbe32c753a88e4886'
    }
})