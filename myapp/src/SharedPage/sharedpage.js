import React, { Component } from "react"
import { Outlet } from 'react-router-dom';
import Footer from "./footer"
import Header from "./header"
import "./css/styles.css"


class header extends Component{
    constructor(props){
        super();
    }
    render(){
        return (
            <>
                <Header/>
                    <Outlet/>
                <Footer />
            </>
        )
    }
}


export default header;