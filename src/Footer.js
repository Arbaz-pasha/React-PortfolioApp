import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./footer.css";
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer=()=>{

    return(
        <>
        <div className="footer">
        <div className="content-footer">

        <div className="heading text-capitalize text-center">
            <h1 className="fheading"> <span>Get in touch</span>  </h1>
           <p>Arbaz Pasha</p>
        </div>
            <div className="fcontainer ">
              
                    <div className="card cardv">
                     
                         <a className=" text-decoration-none text-black" href="#Home"><p>Home</p></a>
                        <a className=" text-decoration-none text-black" href="#skills"><p>My skills</p></a>
                        <a className=" text-decoration-none text-black" href="#projects"> <p>Reviews</p></a>
                       
                    </div>

                    <div className="card ">
                        <div className="content-icons">
                           <a className=" text-decoration-none text-black" target="new_blank" href="https://www.facebook.com/arbaz.pasha.7549"> <FacebookIcon /></a>
                          <a className=" text-decoration-none text-black" target="new_blank" href="https://www.instagram.com/_arbazpasha222/"> <InstagramIcon /></a> 
                           <a className=" text-decoration-none text-black" target="new_blank" href="https://www.linkedin.com/in/arbaz-pasha-b15357200/"> <LinkedInIcon /></a> 
                        </div>
                        <p className=" text-center"> Lets Have A Talk </p>
                        <button className="fbtn text-capitalize">contact me</button>
                    </div>

                    <div className="card cardv">
                        <a className=" text-decoration-none text-black" href="#About"><p>About</p></a>
                        <a className=" text-decoration-none text-black" href="#projects" ><p>My projects</p></a>
                        <a className=" text-decoration-none text-black" href="#projects"> <p>work</p></a>
                    </div>

                </div>

                <p className="  text-center mt-5 mt-sm-5">@2022</p>
            </div>
        </div>
        </>
    )
}

export default Footer