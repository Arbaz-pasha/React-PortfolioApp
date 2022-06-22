import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";
import Image from "./components/Image";

const Skills=(props)=>{


    return(
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

            <div className="cards card2">
                <div>
                        <h5>vs code 💯<img src={require("./images/1.jpg")} style={{width:"20px",height:"20px"}}/></h5>
                        <h5>Eclih5se 🎱</h5>
                        <h5>Intelli j 😋</h5>
                        <h5>github 🥇</h5>
                        <h5>bit buket 🤐</h5>
                </div>
            </div>

            <div className="cards ">
                {/* <img src="../images/logo192.png " alt="not_found"   /> */}
                <Image link={props.link}/>
                </div>

        </div>


        {/* <div className="container">
            <div className="cards">
                <h1>Dev Tools</h1>
                <h2>Tools i work with while coding</h2>
                <p>These are the tools that I mainly use while coding and building something creative</p>
            </div>

            <div className="cards">
                <div>
                    <ul>
                        <h2>vs code 💯</h2>
                        <h2>Eclipse 🎱</h2>
                        <h2>Intelli j 😋</h2>
                        <h2>github 🥇</h2>
                        <h2>bit buket 🤐</h2>
                    </ul>
                </div>
            </div>

            <div className="cards">
                <img src="../images/logo192.png"   />
                </div>

        </div>


        <div className="container">
            <div className="cards">
                <h1>Dev Tools</h1>
                <h2>Tools i work with while coding</h2>
                <p>These are the tools that I mainly use while coding and building something creative</p>
            </div>

            <div className="cards">
                <div>
                    <ul>
                        <h2>vs code 💯</h2>
                        <h2>Eclipse 🎱</h2>
                        <h2>Intelli j 😋</h2>
                        <h2>github 🥇</h2>
                        <h2>bit buket 🤐</h2>
                    </ul>
                </div>
            </div>

            <div className="cards">
                <img src="../images/logo192.png"   />
                </div>

        </div> */}
        </div>
    )
}

export default Skills