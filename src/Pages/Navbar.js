import React from "react";
import { Link } from "react-router-dom";
import { MDBIcon} from 'mdbreact';
// import { CiBank } from 'react-icons/ci';
import { CiUser } from 'react-icons/ci';
import { CiServer } from 'react-icons/ci';
import { BsPersonCircle } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

export const Navbar = () => {
	return (
		<>
    <div className="backnav">
<nav class="navbar navbar-expand-lg navbar-dark bg-transparent ml-auto">
  <div class="container-fluid">
    <h2 class="navnav navbar-brand" href="#">DG.</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <Link to="/">
        <li class="nav-item">
        <a class="nav-link" href="#"><a className="hover" style={{ textDecoration: 'none' }}><MDBIcon className='ms-1' icon='home' size='sm' /> <b> Home</b></a></a>
        </li>
        </Link>
        <Link to="/About">
        <li class="nav-item">
        <a class="nav-link" href="#"><a className="hover" style={{ textDecoration: 'none' }}><MDBIcon className='ms-1' icon='user' size='sm' /> <b> About</b></a></a>
        </li>
        </Link>
        <Link to="/Projects">
        <li class="nav-item">
        <a class="nav-link" href="#"><a className="hover" style={{ textDecoration: 'none' }}><MDBIcon className='ms-1' icon='book' size='sm' /> <b> Projects</b></a></a>
        </li>
        </Link>
        <Link to="/Resume">
        <li class="nav-item">
        <a class="nav-link" href="#"><a className="hover" style={{ textDecoration: 'none' }}><MDBIcon className='ms-1' icon='file' size='sm' /> <b> Resume</b></a></a>
        </li>
        </Link>
      </ul>
    </div>
  </div>
</nav>
</div>
</>
	  
	);
};