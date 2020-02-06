import axios from "axios";

export default {
    
    getTest: function(){
        var url = window.location.hostname;
        return axios.get("http://"+url+":5000/api/test/hello");
    },

    getDeckLists: function(){
        var url = window.location.hostname;
        return axios.get("http://"+url+":5000/api/decklist/getDecklists");
    },

    getDeckById: function(id){
        var url = window.location.hostname;
        return axios.get("http://"+url+":5000/api/decklist/getDeckById", {params: {id:id}});
    },

    checkLogin: function(){
        const config ={
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        var url = window.location.hostname;
        return axios.get("http://localhost:5000/auth/isLoggedIn", config)
    },

    getArticles: function(){
        var url = window.location.hostname;
        return axios.get("http://"+url+":5000/api/article/getArticles");
    },
    getArticleById: function(id){
        var url = window.location.hostname;
        return axios.get("http://"+url+":5000/api/article/getArticleById", {params: {id:id}});
    }
}