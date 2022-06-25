import React from "react"
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"


const ProjectX=(props)=>{

    return(
        <>
             <div className="cards-p" >
                <a className=" text-decoration-none text-black" href={props.url} target="new_blank">
                <img  src={props.link} alt="not found" />
                <p className=" text-center text-capitalize text-decoration-none">{props.pname}</p></a>
            </div>
        </>
    )
}

export default ProjectX