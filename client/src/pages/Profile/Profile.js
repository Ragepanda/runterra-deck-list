import React from "react";
import api from "../../utils/api";




class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            id: null,
            isLoadedIn: false,
            displayName: ""
        };

    }


    componentDidMount() {
        api.checkLogin()
            .then((res) => {
                console.log(res.data);
                this.setState({ isLoggedIn: res.data.isLoggedIn, id: res.data.id, isLoadedIn: true, displayName: res.data.displayName })
            })
    }


    render() {
        if (this.state.isLoaded === false) {
            //We need to code a log in page
            return <div><p>Loading...</p></div>
        }

        else {
            return (

                <div className="container">
                    <div className="text-center">
                        <h2 className="pt-3">{this.state.displayName}</h2>
                        <p className="pb-4 pt-1">Welcome to your profile page {this.state.displayName}</p>
                    </div>

                </div>
            );
        }
    }
};

export default Profile;