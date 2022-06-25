import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";
import Image from "./components/Image";
import './index.css'
import Card2 from "./components/Card2";
const Skills=(props)=>{


    return(
        <>
        <div className="skills">
        <div className="container">
            <div className="cards card1 ">
                {/* <h1>Dev Tools</h1> */}
                <Heading heading ={props.heading}/>
                {/* <h2>Tools i work with while coding</h2> */}
                <Title title ={props.title}/>
                {/* <p>These are the tools that I mainly use while coding and building something creative</p> */}
                <Paragraph para={props.para}/>
            </div>

            <Card2 
            cardheading1={props.cardheading1}
            cardimage1={props.cardimage1}

            cardheading2={props.cardheading2}
            cardimage2={props.cardimage2}

            cardheading3={props.cardheading3}
            cardimage3={props.cardimage3}

            cardheading4={props.cardheading4}
            cardimage4={props.cardimage4}

            cardheading5={props.cardheading5}
            cardimage5={props.cardimage5}
            />

            <div className="cards ">
                {/* <img src="../images/logo192.png " alt="not_found"   /> */}
                <Image link={props.link}/>
                </div>

        </div>
        </div>
        </>
    )
   
}

export default Skills