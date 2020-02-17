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

    addNewDeck: function(id, deckCode, deckName, deckDescription){
        var url = window.location.hostname;
        return axios.post("http://"+url+":5000/api/decklist/addNewDeck", 
        {id:id, deckCode:deckCode, deckName:deckName, deckDescription: deckDescription});
    },

    getCreatedDecks: function(){
        const config= {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        var url = window.location.hostname; 
        return axios.get("http://"+url+":5000/api/decklist/getCreatedDecks", config)
    },

    checkLogin: function(){
        const config ={
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        var url = window.location.hostname;
        return axios.get("http://"+url+":5000/auth/isLoggedIn", config)
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