import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../index.css"

const Card2=(props)=>{
    return(
        <>
        <div className="cards card2">
                <div className="card-content">
                    <div className="skill-content mb-4">
                        <h5 className=" text-capitalize">{props.cardheading1}</h5>
                        <img src={props.cardimage1} style={{width:"30px",height:"30px"}} alt="not found"/>
                    </div>

                    <div className="skill-content mb-4">
                        
                        <h5 className=" text-capitalize" >{props.cardheading2}</h5>
                        <img src={props.cardimage2} style={{width:"30px",height:"30px"}} alt="not found"/>
                    </div>

                    <div className="skill-content mb-4">
                        
                        <h5 className=" text-capitalize" >{props.cardheading3}</h5>
                        <img src={props.cardimage3} style={{width:"30px",height:"30px"}} alt="not found"/>
                    </div>

                    <div className="skill-content mb-4">
                        
                        <h5 className=" text-capitalize" >{props.cardheading4}</h5>
                        <img src={props.cardimage4} style={{width:"30px",height:"30px"}} alt="not found"/>
                    </div>

                    <div className="skill-content mb-4">
                        
                        <h5 className=" text-capitalize" >{props.cardheading5}</h5>
                        <img src={props.cardimage5} style={{width:"30px",height:"30px"}} alt="not found"/>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Card2