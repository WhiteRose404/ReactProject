import React, { Component } from "react"

class welcome extends Component{
    render(){
        return (
                <div>
                    <p>KOKo</p>
                    {this.props.children}
                </div>
                );
    }
}

export default welcome;