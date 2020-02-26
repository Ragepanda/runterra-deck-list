import React from "react";
class LogInModal extends React.Component {

    render() {
        return(
        <div>
            <h2 ref={subtitle => this.subtitle = subtitle}>Login</h2>
            <h2 ref={subtitle => this.subtitle = subtitle}>Test Login</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <div className="btn">
                <a href={"http://" + window.location.hostname + ":5000/auth/google"}> Google </a>
            </div>

            <div className="btn" onClick={this.checkAuth}>
                IsLoggedIn
                </div>

            <div className="btn">
                <a href={"http://" + window.location.hostname + ":5000/auth/logout"}>Log Out</a>
            </div>
        </div>
        );
    }
}
export default LogInModal;