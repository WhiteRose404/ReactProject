import './App.css';
import './StudentsPage/css/basicstyle.css'
import Img from "./LoginPageCompo/img"
import Form from "./LoginPageCompo/form"
import Header from "./StudentsPage/header"
import Footer from "./StudentsPage/footer"
import StudentStuff from "./StudentsPage/studentStuff"
import TeacherStuff from "./TeacherPage/teacherstuff"
import { Component } from 'react';

class myApp extends Component{
  constructor(){
    super();
  }
  state = {
    DisplayAccount: 0,
    userID: "3",
  }
  updateTheState = (msg) => {
    this.setState({
      DisplayAccount:msg
    })
  }
  changeUser = (e)=>{
    this.setState({
      userID: e.target.value
    });
  }
  render(){
    console.log("Rendring...",this.state)
    let loginPage = (
        <div className="ContainerLogin">
              <Img />
              <Form />
        </div>
    );
    let studentsPage = (
        <div>
          <Header PullData={this.updateTheState}/>
          <StudentStuff id={this.state.userID} clicked={this.state.DisplayAccount}/>
          <Footer />
        </div>
    )
    let teacherPager = (
        <div>
          <Header PullData={this.updateTheState}/>
          <TeacherStuff />
          <Footer />
        </div>
    )
    return studentsPage;
  }
}
export default myApp;
