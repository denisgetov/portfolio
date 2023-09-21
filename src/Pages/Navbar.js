import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MDBIcon} from 'mdbreact';
// import { CiBank } from 'react-icons/ci';
import { CiUser } from 'react-icons/ci';
import { CiServer } from 'react-icons/ci';
import { BsPersonCircle } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineHome, AiOutlineUser, AiOutlineFileSync, AiOutlineProject } from 'react-icons/ai';
import '../custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Navbar = () => {
	return (
		<>
    <div className="backnav">
    <nav class="navbar navbar-expand-md navbar-dark bg-transparent ml-auto">
  <div class="container-fluid">
  <h2 class="navnav navbar-brand" href="/" style={{ marginTop: '0' }}>DG.</h2>
  <button className="navbar-toggler custom-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">

<Link to="/" className="hoverover"  style={{ textDecoration: 'none'  }} 
><AiOutlineHome size={18}/> Home
 </Link>



<Link to="/about" className="hoverover"  style={{ textDecoration: 'none'  }} 
>< AiOutlineUser /> About </Link>

<Link to="/projects" className="hoverover"  style={{ textDecoration: 'none'  }} 
>< AiOutlineProject /> Projects </Link>


<Link to="/resume" className="hoverover"  style={{ textDecoration: 'none'  }} 
>< AiOutlineFileSync /> Resume </Link>
      </ul>
    </div>
  </div>
</nav>
</div>
</>
	  
	);
};