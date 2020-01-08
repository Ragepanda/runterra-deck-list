import axios from "axios";

export default {

    getTest: function(){
        return axios.get("http://localhost:5000/api/test/hello")
    }
}