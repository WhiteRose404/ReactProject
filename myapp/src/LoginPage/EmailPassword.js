import React from 'react'
import './css/EmailPasswd.css'



function comp(props){
    let passwd = (e)=>{
        props.update.updatePassword(e.target.value);
    }
    let email = (e)=>{
        props.update.updateEmail(e.target.value);
    }
    return (
        <div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control check" id="floatingInput" placeholder="name@example.com" onChange={email}/>
                <p className="msgemail extraSmall"></p>
            </div>  
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={passwd}/>
            </div>
        </div>
        )
}

export default comp;