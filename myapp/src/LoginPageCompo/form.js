import React from 'react'
import './css/form.css'
import Epaswd from './EmailPassword'
function form(){
    return (
        <form action="#">
            <h1>Sign in</h1>
            <p className="BigScreen">Please enter your email address and passowrd bellow.</p>
            <p className="SmallScreen">if you have any issues please <a href="https://www.google.com">contact us</a>.</p>
            <Epaswd />
            <button class="btn">Sign In</button>
        </form>
    )
}

export default form;