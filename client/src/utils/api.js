import axios from "axios";

export default {
    
    getTest: function(){
        var url = window.location.hostname;
        return axios.get("http://"+url+":5000/api/test/hello");
    },

    getDeckLists: function(){
        const config= {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        var url = window.location.hostname;
        return axios.get("http://"+url+":5000/api/decklist/getDecklists", config);
    },

    getDeckById: function(id){
        var url = window.location.hostname;
        return axios.get("http://"+url+":5000/api/decklist/getDeckById", {params: {id:id}});
    },

    addNewDeck: function(id, deckCode, deckName, deckDescription, deckImg){
        var url = window.location.hostname;
        return axios.post("http://"+url+":5000/api/decklist/addNewDeck", 
        {id:id, deckCode:deckCode, deckName:deckName, deckDescription: deckDescription, deckImg: deckImg});
    },

    deleteDeck: function(id){
        var url = window.location.hostname;
        const config= {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
            data:{
                id: id
            } 
        };
        return axios.delete("http://"+url+":5000/api/decklist/deleteDeck", config)
    },

    likeDeck: function(deckId){
        const config= {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        var url = window.location.hostname; 
        return axios.put("http://"+url+":5000/api/decklist/likeDeck", {id:deckId}, config)
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

    getLikedDecks: function(){
        const config= {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        var url = window.location.hostname; 
        return axios.get("http://"+url+":5000/api/decklist/getLikedDecks", config)
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