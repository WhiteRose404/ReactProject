import React from 'react'
import './css/EmailPasswd.css'


function comp(){
    return (
        <div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control check" id="floatingInput" placeholder="name@example.com" />
                <p className="msgemail extraSmall"></p>
            </div>  
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            </div>
        </div>
        )
}

export default comp;