import React,{Component} from "react"
import "./css/styles.css"
class teacher extends Component{
    constructor(){
        super();
    }
    render(){
        return (
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
        </div>
    )
    }
}
export default teacher;

