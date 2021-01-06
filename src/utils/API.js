import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50&nat=au";

export default {
    search: function (query) {
        return axios.get(BASEURL);
    }
};
