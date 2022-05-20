import React from "react"
import "./css/studentStuff.css"


let studentStuff = () => {
    return (
        <main>
            <section className="news">
                <h2>News</h2>
                <div className="items">
                    <div className="box happy">
                        <p>The Exam has postpond</p>
                    </div>
                    <div className="box sad">
                        <p>Kolxi ratt</p>
                    </div>
                    <div className="box sad">
                        <p>Exam Reseau </p>
                    </div>
                    <div className="box happy">
                        <p>The Exam has postpond</p>
                    </div>
                    <div className="box normal">
                        <p>The result is available</p>
                    </div>
                    <div className="box sad">
                        <p>kolxi ratt</p>
                    </div>
                </div>
            </section>
            <section className="Space">
                <h2>Explore</h2>
            </section>
        </main>
    )
};

export default studentStuff;