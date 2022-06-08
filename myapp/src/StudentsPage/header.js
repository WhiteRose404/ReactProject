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
                <ul className="wideScreen">
                    <li className="logo"><img src="https://www.lamsade.dauphine.fr/~isco/ISCO2018/sites/default/files/ensias-logo.png"/></li>
                    <li><a href="school">School</a></li>
                    <li><a href="">Drive</a></li>
                    <li>Account</li>
                </ul>
                <div className="smallScreen">
                    <img src="https://www.lamsade.dauphine.fr/~isco/ISCO2018/sites/default/files/ensias-logo.png"/>
                    <select>
                        <option><a href="school">School</a></option>
                        <option><a href="">Drive</a></option>
                        <option>Account</option>
                    </select>
                </div>

                
            </header>
        )
    }
}


export default header;