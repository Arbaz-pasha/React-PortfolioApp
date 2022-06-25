import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Navbar";
import Frontpage from "./Frontpage";
import About from "./About";
import Skills from "./Skills";
import Sdata from "./components/Sdata";
import Project from "./Projects";
import Footer from "./Footer";
import "./App.css";


function ncards(val)
{
    return(
    <Skills 
        heading={val.heading}
        title={val.title}
        para={val.para}
        link={val.link}
    />
    )
}

const App=()=>{

    return(
        <>
        <section className="homesection" id="Home">
        <Navbar/>
        <Frontpage/>
        </section>

        <section className="about-page" id="About">
        <About/>
        </section>
        <h1 className="about-heading text-center text-decoration-underline mt-5" id="skills">My Skills</h1>
        <div className="skill-page" >
        {/* <Skills  heading={value.heading}/>  */}
        {Sdata.map(ncards)}
        </div>
       
       <section className="project-section" id="projects">
        <Project/>
       </section>

       <section className="Footer">
       <Footer/>
       </section>
        </>
      
    );  

}

export default App