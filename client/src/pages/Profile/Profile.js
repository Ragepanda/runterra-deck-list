import React from "react";
import api from "../../utils/api";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import DeckItems from "../../component/Deck";




class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            id: null,
            isLoadedIn: false,
            displayName: ""
        };
        this.updateDecks = this.updateDecks.bind(this);
        this.loadCreatedDecks = this.loadCreatedDecks.bind(this);
        this.loadLikedDecks = this.loadLikedDecks.bind(this);
    }


    componentDidMount() {
        api.checkLogin()
            .then((res) => {
                console.log(res.data);
                this.setState({ isLoggedIn: res.data.isLoggedIn, id: res.data.id, displayName: res.data.displayName },
                    () => {

                        if (this.state.isLoggedIn === true) {
                            api.getCreatedDecks()
                                .then(res2 => {
                                    this.setState({createdDecks: res2.data });
                                    api.getLikedDecks()
                                        .then(res3 =>{
                                            this.setState({likedDecks: res3.data, isLoadedIn:true})
                                        })
                                })
                        }
                    })
            })
    }

    updateDecks(){
        console.log("Liked Decks updating");
        api.getCreatedDecks()
            .then((res)=>{             
                    console.log(res.data);
                    api.getLikedDecks()
                    .then((res2) =>{
                        this.setState({createdDecks: res.data, likedDecks: res2.data},()=>{
                            console.log(res2.data);
                        })
                    })              
            })
        }
    //     api.getLikedDecks()
    //         .then(res=>{
    //             this.setState({likedDecks: res.data},() =>{               
    //             api.getCreatedDecks()
    //                 .then(res2=>{
    //                     console.log(res2);
    //                     this.setState({createdDecks: res2.data},
    //                     ()=>{
    //                         console.log(this.state.createdDecks)});
    //                 })
    //             })
    //         })
    // }

    loadCreatedDecks() {
        return (
            this.state.createdDecks.map((deck, index) =>
                <DeckItems profilePage={true} updateDecks={this.updateDecks} deck={deck} key={deck.id} />
            )
        )
    }

    loadLikedDecks(){
        return(
            this.state.likedDecks.map((deck, index)=>
                <DeckItems updateDecks={this.updateDecks} deck={deck} key={deck.id}/>
            )
        )
    }
    render() {
        if (this.state.isLoadedIn === false) {
            //We need to code a log in page
            return <div><p>Loading...</p></div>
        }

        else {
            return (
                <div className="container regBody">
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Home">
                            <div className="text-center">
                                <h2 className="pt-3">{this.state.displayName}</h2>
                                <p className="pb-4 pt-1">Welcome to your profile page {this.state.displayName}</p>
                            </div>
                        </Tab>
                        <Tab eventKey="createdDecks" title="Created Decks" onClick={console.log("Created Decks Selected")}>
                            <div className="row text-center">
                                {this.loadCreatedDecks()}
                            </div>
                        </Tab>
                        <Tab eventKey="likedDecks" title="Liked Decks">
                        <div className="row text-center">
                                {this.loadLikedDecks()}
                            </div>
                        </Tab>
                    </Tabs>
                </div>



            );
        }
    }
};

export default Profile;