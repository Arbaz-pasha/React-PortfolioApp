import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./index.css"
const Nav=()=>{

return(

    <>
<nav  className="navbar_div  mt-0">
    <div className="navbar" >
        <h3 className="nav-heading mt-2"> Welcome to my porfolio site</h3>
        <ul className=" buttons">
            <a className=" text-decoration-none ms-4  active" href="#home">Home</a>
            <a className=" text-decoration-none ms-4" href="#home">About</a>
            <a className=" text-decoration-none ms-4" href="#home">Project</a>
        </ul>
    </div>
</nav>

{/* 
<nav className="navbar navbar-expand-md navbar-expand-sm bg-dark navbar-dark">
  <!-- Brand -->
  <a className="navbar-brand" href="#">Welcome to my porfolio</a>

  <!-- Toggler/collapsibe Button -->
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <!-- Navbar links -->
  <div className="collapse navbar-collapse navbar-expand-sm " id= "collapsibleNavbar ">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav> */}

</>
);

}

export default Nav