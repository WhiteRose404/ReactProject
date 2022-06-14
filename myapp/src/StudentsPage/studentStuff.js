import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./css/studentStuff.css"

class studentStuff extends Component{
    state = {
        student:{
            id: -1,
            firstname:"Loading",
            lastname:"Loading",
            email:"Loading",
            major: -1
        },
        subject:[], // List of objects {name, id}
        major:{
            title: "Loading",
            description: "Loading",
            id:-1
        },
        Online: true
    };
    // clicked = 0;
    constructor(props){
        super();
        this.props = props;
        // this.clicked = props.clicked; DEAD END
        // this.AddClass = this.AddClass.bind(this);
        // this.successRender = this.successRender.bind(this);
        this.events = this.events.bind(this);
        this.SubjectLister = this.SubjectLister.bind(this);
    }
    // AddClass(){
    //     const section = document.querySelector(".State");
    //     this.clicked ? section.classList.add("gobig") : section.classList.remove("gobig");
    // } DEAD END
    
    
    // fetch the data from the back end
    successRender(){
        fetch(`http://104.196.116.136/api/register/`).then(a => a.json()).then( a=>{
            this.setState({
                student: a[this.props.id],
                subject:this.state.subject,
                major: this.state.major
            });
            console.log(a)
            this.FetchTheData(a[this.props.id].major);
        }).catch((a)=>{
            this.setState({
                Online: false
            });
        });
    }
    // (Due the structer of database need to changes)
    // fetch the rest of the data Major and subjects 
    FetchTheData(major){
        fetch(`http://104.196.116.136/api/majors/${major}`).then((a)=>a.json()).then(a => {
            this.setState({
                student: this.state.student,
                subject: this.state.subject,
                major: a
            });
        });
        fetch(`http://104.196.116.136/api/subjects`).then((a)=>a.json()).then(a => {
            const subj = a.filter(element => element.major===major).map(element =>{
                return {name: element.name, id: element.id}
            });
            this.setState({
                student: this.state.student,
                subject: subj,
                major: this.state.major
            });
        });
    }

    // Listen to user clicked (grades)
    // UNCOMPLET
    events(e){
        alert(`So creative id of the subject is ${e.target.dataset.id}`);
    }
    // List the subjects
    // Git rid of Record Option
    SubjectLister(subjectName){
        return (
            <Link to={`subject/${subjectName.id}`} className="Subject">
                <div className="Header">
                    {subjectName.name}
                </div>
                <div className="Options1" onClick={this.events} data-id={subjectName.id}>
                    Grade
                </div>
                <div className="Options2">
                    Your States
                </div>
            </Link >
        )
    }
    // after the com has moount fetch the user data
    componentDidMount(){
        this.successRender();
    }
    // BRUH
    render(){
        // let Space = this.state.subject.map(this.SubjectLister);
        let ErrorSpace = (
            <div className="Subject">
                <div className="Header">
                    <img src="https://gifimage.net/wp-content/uploads/2018/04/kermit-the-frog-freaking-out-gif-7.gif" alt="Screaming"/>
                </div>
                <div className="Header">
                    Mxi dapa
                </div>
            </div>
        )
        // let State = (
        //     <div className="items" >
        //         <div className="box">
        //             <div>Last Name <div className="box normal">{this.state.student.lastname} </div></div>
        //         </div>
        //         <div className="box">
        //             <div>Master <div className="box happy">{this.state.major.title}</div></div>
        //         </div>
        //         <div className="box">
        //             <div>More Like <div className="box sad">{this.state.major.description}</div></div>
        //         </div>
        //     </div>    
        // );
        let ErrorState = (
            <div className="items" >
                <div className="box">
                    <div>Check Your Connection <div className="box sad">Unable to fetch</div></div>
                </div>
            </div>
        )
        return (
            <main>
                <section className="State" >
                    <h2>State</h2>
                    {/* {this.state.Online? State : ErrorState} */}
                    {ErrorState}
                </section>
                <section className="Space">
                    {/* {this.state.Online ? Space : ErrorSpace} */}
                    {ErrorSpace}

                </section>
            </main>
        )
    }
}
export default studentStuff;