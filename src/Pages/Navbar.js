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
		
<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#f2f2f2'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">DG</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  
        <li class="nav-item ">
        <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>


        </li>
        <li class="nav-item">
        <NavLink exact activeClassName="active" className="nav-link" to="/projects">Projects</NavLink>
        </li>
      </ul>

    </div>
  </div>
</nav>	  
	);
};