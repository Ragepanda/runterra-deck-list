import React from "react";
import './LogInModal.css';
class LogInModal extends React.Component {

    render() {
        return (
            <div id="logInModal">
                <h2 ref={subtitle => this.subtitle = subtitle}>Login</h2>
                <div id="modalClose" onClick={this.props.closeModal}>
                    <svg height="25" wdith="25" viewBox="0 0 25 25" fill="#FF0000" onClick={this.props.closeModal} >
                        <path d="M 24.1797 4.92969 L 16.5977 12.5117 L 24.1797 20.0938 C 25.3047 21.2227 25.3047 23.0508 24.1797 24.1797 C 23.6133 24.7422 22.875 25.0234 22.1367 25.0234 C 21.3984 25.0234 20.6602 24.7422 20.0977 24.1797 L 12.5117 16.5938 L 4.92969 24.1797 C 4.36719 24.7422 3.625 25.0234 2.88672 25.0234 C 2.14844 25.0234 1.41016 24.7422 0.847656 24.1797 C -0.28125 23.0508 -0.28125 21.2227 0.847656 20.0938 L 8.42969 12.5117 L 0.847656 4.92969 C -0.28125 3.80078 -0.28125 1.97266 0.847656 0.84375 C 1.97266 -0.28125 3.80078 -0.28125 4.92969 0.84375 L 12.5117 8.42969 L 20.0938 0.84375 C 21.2227 -0.28125 23.0508 -0.28125 24.1758 0.84375 C 25.3047 1.97266 25.3047 3.80078 24.1797 4.92969 Z M 24.1797 4.92969">
                        </path>
                    </svg>
                </div>
                <div className="btn">
                    <a href={"http://" + window.location.hostname + ":5000/auth/google"}> Google </a>
                </div>
            </div>
        );
    }
}
export default LogInModal;