import React,{Component} from "react"
import element from "../StudentsPage/Elements"
import "./css/styles.css"
class teacher extends Component{
    state = {
        default: (
        <div className="Container">
            <div className="item">
                Update the Ciruclum
            </div>
            <div className="item">
                Publish Grades
            </div>
            <div className="item">
                Create Account
            </div>
            <div className="item">
                Add Content to the Ciruclum
            </div>
        </div>),
        custom: false
    }
    reset(){
        this.setState({
            custom: false
        })
    }
    action(){
        const select = document.querySelectorAll("input")
        let [firstname,lastname,email,password] = Array.from(select).map( element => element.value)
        // fetch post the result vers http://104.196.116.136/api/register/
    }
    adduser(e){
        console.log(this)
        let makingJSX = (
                <div className="Form">
                    <label>first name</label>
                    <input type="text"></input>
                    <label>last name</label>
                    <input type="text"></input>
                    <label>Email</label>
                    <input type="text"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button onClick={this.action} className="btn">Submit</button>
                    <button onClick={this.reset} className="btn">GO back</button>
                </div>
            
        )
        this.setState({
            custom:makingJSX 
        })
    }
    componentDidMount(){
        const select = document.querySelector(".Container div:nth-child(3)");
        select.addEventListener("click",this.adduser);
    }
    constructor(props){
        super();
        this.adduser = this.adduser.bind(this);
        this.reset = this.reset.bind(this);
    }
    
    render(){
        return (this.state.custom || this.state.default);
    }
}
export default teacher;

