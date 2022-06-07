import React, { Component } from "react"
import "./css/header.css"


class header extends Component{
    // Account clicked memory
    clicked = 0;
    constructor(props){
        super();
        this.callback = props.PullData;
        // this.AccountClicked = this.AccountClicked.bind(this)
    }
    // AccountClicked(e){
    //     console.log(this)
    //     this.clicked = (this.clicked+1)%2;
    //     this.callback(this.clicked);
    // }
    AccountClicked(e){
        console.log("Under Construction")
    }   
    componentDidMount(){
        const section = document.querySelector("header ul li:last-child");
        section.addEventListener("click",this.AccountClicked)
    }
    componentWillUnmount() {
        const section = document.querySelector("header ul li:last-child");
        section.removeEventListener("click", (e)=>{
            this.callback("WORKED")
        })
    }
    render(){
        return (
            <header>
                <ul>
                    <li className="logo"><img src="https://www.lamsade.dauphine.fr/~isco/ISCO2018/sites/default/files/ensias-logo.png"/></li>
                    <li><a href="school">School</a></li>
                    <li><a href="https://drive.google.com/drive/folders/14zbYKkzRfK8NrXsHrO9BWpYiGtCyL0F-">Drive</a></li>
                    <li>Account</li>
                </ul>
            </header>
        )
    }
}


export default header;