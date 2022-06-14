// lib
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// css
import './App.css';
import './StudentsPage/css/basicstyle.css'


// pages
import LoginPage from "./LoginPage/loginpage"
import SharedPage from "./SharedPage/sharedpage"
import StudentStuff from "./StudentsPage/studentStuff"
import TeacherStuff from "./TeacherPage/teacherstuff"
import ProtectedRoute from "./Routes/ShowMetheway"
import Notfound from "./Notfoundpage/notfoundpage"



class myApp extends Component{
  constructor(props){
    super(props); 
    this.etat = {
      email:"none",
      password:"none"
    };
    this.auth = this.auth.bind(this);
    this.check = this.check.bind(this);
  }
  state = {
    token: "wyah",
    online: false
  }
  updateTheState = (msg) => {
    this.setState({
      DisplayAccount:msg
    });
  }
  auth = (msg)=>{
    this.etat.email = msg.email;
    this.etat.password = msg.email;
    this.setState({online: this.check()});
  }
  wrapSecurity = (content)=>{
    // add here the localStorage second verfication
    return (
      <ProtectedRoute validate={this.state.online || false}>
        {content}
      </ProtectedRoute>
    )
  }
  check(){
    let getThisManAtoken = ()=> "abcd";

    console.log(this.etat.email,this.etat.password,this.state.online)
    const flag = this.etat.email === "admin" && this.etat.password === "admin";
    
    if(flag){
      this.setState({
        token: getThisManAtoken()
      })
    }
    return flag;
  }
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage auth={this.auth}/>} />
          <Route path="/home" element={this.wrapSecurity(<SharedPage token={this.state.token}/>)}>
            <Route path="stud" element={this.wrapSecurity(<StudentStuff id={this.state.userID} clicked={this.state.DisplayAccount}/>)}/>
            <Route path="admin" element={this.wrapSecurity(<TeacherStuff />)}/>
          </Route>
          <Route path="*" element={<Notfound />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default myApp;