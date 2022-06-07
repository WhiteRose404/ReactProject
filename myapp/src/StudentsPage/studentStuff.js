import React, { Component } from "react"
import Subelement from "./Elements"
import "./css/studentStuff.css"
import element from "./Elements";

class studentStuff extends Component{    
    state = {
        student:{
            id: -1,
            firstname:"Loading",
            lastname:"Loading",
            email:"Loading",
            major: -1
        },
        subject:[], //need the name and id booth
        major:{
            title: "Loading",
            description: "Loading",
            id:-1
        }
    };
    // clicked = 0;
    constructor(props){
        super();
        this.props = props;
        // this.clicked = props.clicked; DEAD END
        // this.AddClass = this.AddClass.bind(this);
    }
    // AddClass(){
    //     const section = document.querySelector(".State");
    //     this.clicked ? section.classList.add("gobig") : section.classList.remove("gobig");
    // } DEAD END
    componentDidMount(){
        console.log(this.props.id)
        fetch(`http://104.196.116.136/api/register/`).then(a => a.json()).then( a=>{
            this.setState({
                student: a[this.props.id],
                subject:this.state.subject,
                major: this.state.major
            });
            this.FetchTheData(a[this.props.id].major);
        });
    }
    SubjectLister(subjectName){
        return (
            <div className="Subject">
                <div className="Header">
                    {subjectName}
                </div>
                <div className="Options1">
                    Grades
                </div>
                <div className="Options2">
                    Latest
                </div>
            </div>
        )
    }
    FetchTheData(major){
        console.log(major)
        fetch(`http://104.196.116.136/api/majors/${major}`).then((a)=>a.json()).then(a => {
            this.setState({
                student:this.state.student,
                subject:this.state.subject,
                major: a
            });
        });
        fetch(`http://104.196.116.136/api/subjects`).then((a)=>a.json()).then(a => {
            const subj = a.filter(element => element.major==major).map(element => element.name);
            this.setState({
                student:this.state.student,
                subject: subj,
                major: this.state.major
            });
        });
    }
    render(){
        return (
            <main>
                <section className="State">
                    <h2>State</h2>
                    <div className="items">
                        <div className="box">
                            <div>Master <div className="box happy">{this.state.major.title}</div></div>
                        </div>
                        <div className="box">
                            <div>More Like <div className="box sad">{this.state.major.description}</div></div>
                        </div>
                    </div>
                </section>
                <section className="Space">
                    {this.state.subject.map(this.SubjectLister)}
                </section>
            </main>
        )
    }
}
export default studentStuff;