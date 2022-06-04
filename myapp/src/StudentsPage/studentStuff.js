import React, { Component } from "react"
import Subelement from "./Elements"
import "./css/studentStuff.css"

class studentStuff extends Component{
    constructor(props){
        super();
        this.state = {
            subject:[{
                name: "Loading",
                id: "Loading"
            }],
            major:{
                title: "Loading",
                description: "Loading",
                id:-1
            }
        };
        fetch(`http://104.196.116.136/api/majors/${props.id}`).then((a)=>a.json()).then(a => {
            this.setState({
                subject:this.state.subject,
                major: a
            });

        });
        fetch(`http://104.196.116.136/api/subjects`).then((a)=>a.json()).then(a => {
            const subj = a.filter(element => element.major===props.id).map(element=>{return {name: element.name,id: element.id}});
            this.setState({
                subject: subj,
                major: this.state.major
            });
        });
    }
    
    render(){
        console.log(this.state.subject)
        return (
            <main>
                <section className="State">
                    <h2>State</h2>
                    <div className="items">
                        <div className="box">
                            <div>Master <div className="box happy">{this.state.major.title}</div></div>
                        </div>
                        <div className="box">
                            <div>Description <div className="box sad">{this.state.major.description}</div></div>
                        </div>
                    </div>
                </section>
                <section className="Space">
                    <div className="Subject">
                        <div className="Header">
                            Proba
                        </div>
                        <div className="Options1">
                            Grades
                        </div>
                        <div className="Options2">
                            Latest
                        </div>
                    </div>
                </section>
            </main>
        )
        // add the subject automatically
    }
}
export default studentStuff;