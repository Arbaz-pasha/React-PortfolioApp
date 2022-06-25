import React from "react";
import "./project.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ProjectX from "./components/Project-n";
import Pdata from "./components/Pdata"


function ncards(val){
  return(
    <>
       <ProjectX  
       link={val.link}
        pname={val.pname}
        url={val.url}
       />
    </>
   
  )
}


const Project =()=>{
    return(
    <>
        <div className="project">
          <h1 className="about-heading text-center text-decoration-underline mb-5">My Works</h1>

            <div className="container-pro">

                    <img className="pimg1" src={ require("./images/work.png")} alt="not found" />
                
                    <div className="img-div">
                      <img className="pimg2 ms-5" src={require("./images/workImg1.png")} alt="not found"/>
                      <p className=" mt-5">Here are some of my best projects I have worked on recently
                      <span> on the basis of my learning experience.</span></p>
                    </div>
            </div>       

                    <div className="containerp">

                    {Pdata.map(ncards)}

                   </div>
                   <button className="btnp justify-content-center">Explore more projects</button>
        </div>
        </>
    )


}

export default Project