import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50&nat=au";

const API = {
    Search: function (query) {
        return axios.get(BASEURL);
    },
};

export default API;
