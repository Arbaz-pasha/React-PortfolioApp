import React from "react";
import "./index.css"

const About=()=>{

    return(
        <>
        <div className="about">
        <h1 className="about-heading text-center text-decoration-underline">About Me </h1>
        <br/><br/>
            <div className="container-about">
            
                <div className="right-div ">
                    <p>I am a web developer and a student pursuing my bachelor's degree in Computer Science. I have a serious passion for creating intuitive, dynamic user experiences and web applications.<br/>
                    <span> I started programming with 'C++' back in 2016-17. My interest in designing and web development began after I built a few applications and GUIs using Html and css. Later, I picked up full stack development using Core Java Spring framework  and started building projects using it.<br/><br/>
                    I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experience. I'm interested in working on ambitious projects with positive people.<br/><br/>
                    Recently i have done full stack development in java using Spring framework.And learning and develping my skills every day with technologies like Reack js and DSA ..etc
                    When I'm not coding, I Would like play Cricket ,Watch movies. </span>
                   </p>
                </div>

                <div className="left-div ">
                <img  classname="img " src ={require('./images/ed.jpg')} alt =" not found"></img>
                </div>
        </div>
        </div>
        </>
    )
}

export default About