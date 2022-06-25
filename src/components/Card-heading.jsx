import React from "react";

const CardHeading=(props)=>{
    return(
        <>
           <div className="skill-content">
                        {/* <CardHeading cardheading1={props.cardheading1}/> */}
                        <h5 >{props.cardheading1}</h5>
                        {/* <CardImage cardimage1={props.cardimage1}/> */}
                        <img src={props.cardimage1} style={{width:"20px",height:"20px"}} alt="not found"/>
                        </div>
        </>
    )
}

export default CardHeading