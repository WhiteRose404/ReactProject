import React from "react"
import "./css/header.css"


let header = () => {
    return (
        <header>
            <ul>
                <li className="logo">LOGO</li>
                <li><a href="school">School</a></li>
                <li><a href="https://drive.google.com/drive/folders/14zbYKkzRfK8NrXsHrO9BWpYiGtCyL0F-">Drive</a></li>
                <li><a href="account">Account</a></li>
            </ul>
        </header>
    )
};

export default header;