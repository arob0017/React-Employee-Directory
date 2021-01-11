import axios from "axios";
import SearchForm from "../components/search";
const BASEURL = "https://randomuser.me/api/?results=50&nat=au";

export default {
    Search: function (query) {
        return axios.get(BASEURL);
    }
};
