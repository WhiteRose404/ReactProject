import React from 'react';
import { Navigate} from 'react-router-dom'



function ProtectedRoute({children,validate}){
    console.log("in the kings room",validate);
    //////Authenticate/////
    //    the value of   //
    // validate will give//
    //     You access    //
    ///////////////////////
    if(validate) return children;
    return <Navigate to="/" replace={true} />;
}

export default ProtectedRoute;