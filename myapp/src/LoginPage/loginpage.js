import Img from "./img"
import Form from "./form"
import React, { Component } from 'react'

class loginpage extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return (
            <div className="ContainerLogin">
                <Img />
                <Form auth={this.props.auth}/>
            </div>
        )
    }
}

export default loginpage;