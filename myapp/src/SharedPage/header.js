import React, { Component } from "react"
import { NavLink } from "react-router-dom";
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
                    <li className="logo"><img src="https://www.lamsade.dauphine.fr/~isco/ISCO2018/sites/default/files/ensias-logo.png" alt="the logo of our school"/></li>
                    <li><NavLink to="School" className={({isActive})=>{ return isActive ? ".active .link" : ".link"}}>School</NavLink></li>
                    <li><NavLink to="Drive" className={({isActive})=>{ return isActive ? ".active .link" : ".link"}}>Drive</NavLink></li>
                    <li><NavLink to="Account" className={({isActive})=>{ return isActive ? ".active .link" : ".link"}}>Account</NavLink></li>
                </ul>
                <div className="smallScreen">
                    <img src="https://www.lamsade.dauphine.fr/~isco/ISCO2018/sites/default/files/ensias-logo.png" alt="the logo of our school"/>
                    <select>
                        <option>School</option>
                        <option>Drive</option>
                        <option>Account</option>
                    </select>
                </div>

                
            </header>
        )
    }
}


export default header;