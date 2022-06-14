import React,{useState} from 'react'
import { Link } from 'react-router-dom';

import './css/form.css'
import Epaswd from './EmailPassword'


function form(props){
    const [email,setEmail] = useState(null);
    const [passwd,setPasswd] = useState(null);
    let updateEmail=(mail)=>{
        setEmail(mail);
    }
    let updatePassword=(passwd)=>{
        setPasswd(passwd);
    }
    let action = ()=>{
        props.auth({
            email:email,
            password:passwd
        });
    }
    return (
        <div className='.form'>
            <h1>Sign in</h1>
            <p className="BigScreen">Please enter your email address and passowrd bellow.</p>
            <p className="SmallScreen">if you have any issues please <a href="https://www.google.com">contact us</a>.</p>
            <Epaswd update={{updateEmail,updatePassword}}/>
            <Link to="/home/admin"><button className="btn" onClick={action}>Sign In</button></Link>
        </div>
    )
}

export default form;