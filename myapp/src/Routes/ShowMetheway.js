import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'

function ProtectedRoute({cred,children}){
    const Navigate = useNavigate();
    let validate=()=>{
        //check cred
        console.log(cred)
        cred.setToken({userID: 1})
        return true
    }
    console.log(children)
    if(validate()) return children;
    Navigate("/");
}

export default ProtectedRoute;