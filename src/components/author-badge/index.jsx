import React from "react";
import profileImage from "../../assets/images/leonardo-queiroz-rocha.jpg"
import "./styles.css";

export default function AuthorBadge() {
    return (
        <div className="author-badge-container">
            <img className="author-badge-image" src={profileImage} />
            <div>
                <h3>Leonardo Queiroz Rocha</h3>
                <p>.NET Developer</p>
            </div>
        </div>
    )
}