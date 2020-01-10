import axios from "axios";

export default {

    getTest: function(){
        var url = window.location.hostname;
        return axios.get("http://"+url+":5000/api/test/hello")
    }
}