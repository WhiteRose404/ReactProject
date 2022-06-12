import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class notfoundpage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1>404 A fin radi</h1>
                <Link to="/home/admin" > trje3 ? </Link>
            </div>
        );
    }
}

export default notfoundpage;