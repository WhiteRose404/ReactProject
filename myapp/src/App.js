import './App.css';
import './StudentsPage/css/basicstyle.css'

// lib
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
  }
  state = {
    token: "wyah"
  }
  updateTheState = (msg) => {
    this.setState({
      DisplayAccount:msg
    })
  }
  auth = (msg)=>{
    this.setState(msg)
  }
  wrapSecurity = (content)=>{
    return (
      <ProtectedRoute cred={{user:this.state.user, setToken: this.auth}}>
        {content}
      </ProtectedRoute>

    )
  }
  render(){
    console.log(this.state)
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage auth={this.auth}/>} />
          <Route path="/home" element={this.wrapSecurity(<SharedPage />)} >
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