import React from "react";
import { Link } from "react-router-dom";
import { TbBrandPython } from 'react-icons/tb';
import { SiJavascript } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { SiCss3 } from 'react-icons/si';
import { Navbar } from "./Navbar";
import { Footer } from "./footer";

// import insta from "../../img/insta.png";


export const Projects = () => {
	return (
		<>
        <Navbar />
    <div className="background">
    <div className="text-center"> <div class="d-flex justify-content-center"><h1>My Recent  </h1> <h1 className="twelve"> Work</h1></div></div>
      {/* <h6 className="abttitle text-center">Here Are A Few Of My Recent Projects</h6> */}

  <div class="container mt-4 d-flex justify-content-center">
           
           <div class="row g-0">
  
             <div class="col-md-4 border-right">
                  <div class="cards">
                      
                 
                  <div class="first bg-inf p-4 text-center">
                      <img src="https://img.icons8.com/110/110/lion" />
  
                      <h5 className="projectt">Safari Adventure</h5>
                  <p class="line1 text-align">This is a full-stack web development group project designed to make travelling east and central  Africa cheaper and easier.We find the best activities and stays for you.</p>
                  {/* And all this can be done on our website. */}
                  {/* <button type="button" href="https://github.com/LOGEDI/Safari_Adventure" class="btn btn-warning">GitHub</button> */}
                  <a href="https://sample-service-name-d01o.onrender.com/" class="btn btn-warning">Live Demo</a>

                  </div>
  
                   </div>
                    
             </div>

          <div class="col-md-4">
  
              <div class="cards">
              <div class=" third bg-inf p-4 text-center">
                       <img src="https://img.icons8.com/110/110/star-wars"/>
                      <h5 className="projectt">Star Wars Blog</h5>
                      <p class="line3 ">This is a front-end project designed with popular Javascript framework React.All the data about the characters,vehicles and planets is getting extracted from an external api.(Swapi.dev)</p>
                      {/* <button type="button" class="btn btn-warning">GitHub</button> */}
                      <a href="https://github.com/DGgithubDG/New-StarWars" class="btn btn-warning">GitHub</a>

  
                  </div>
                  </div>
          </div>
  
          <div class="col-md-4">
  
  <div class="cards">
  <div class=" third bg-inf p-4 text-center">
           <img src="https://img.icons8.com/110/110/user"/>
          <h5 className="projectt">Authentication System</h5>
          <p class="line3">A back-end project made with python's popular framework Flask,and also mysql.This gives the user a authentic and unique JWT.The token are signed using a private key.</p>
          {/* <button type="button" class="btn btn-warning">GitHub</button> */}
          <a href="https://github.com/DGgithubDG/Authentication-system-with-Python-Flask-and-React.js" class="btn btn-warning">GitHub</a>

  
      </div>
      </div>
  
  </div>
  
       </div>
             
      </div> 

      <div class="container mt-4 d-flex justify-content-center">
           
           <div class="row g-0">
  
             <div class="col-md-4 border-right">
                  <div class="cards">
                      
                 
                  <div class="first bg-inf p-4 text-center">
                      <img src="https://img.icons8.com//110/110/cards.png" />
  
                      <h5 className="projectt">Card Generator</h5>
                  <p class="line1">Made only with Javascript and a little css. This is a game that can make you a random deck of cards. Able to generate the 52 diffirent cards in a deck.</p>
                  {/* <button type="button" class="btn btn-warning">GitHub</button> */}
                  <a href="https://github.com/DGgithubDG/Random-card-generator" class="btn btn-warning">GitHub</a>

  
                  </div>
  
                   </div>
                    
             </div>

          <div class="col-md-4">
  
              <div class="cards">
              <div class=" third bg-inf p-4 text-center">
              {/* <img src={insta}></img>  */}
              <img src="https://img.icons8.com/110/110/database" />

                      <h5 className="projectt">Instagram Database Model</h5>
                      <p class="line3">Creating the entity relationship diagram for Instagram's Database using postgresql.Making closed and open relationships depending on the type of data required</p>
                      {/* <button type="button" class="btn btn-warning">GitHub</button> */}
                      <a href="https://github.com/DGgithubDG/exercise-instagram-data-modeling" class="btn btn-warning">GitHub</a>

  
                  </div>
                  </div>
  
          </div>
  
          <div class="col-md-4">
  
  <div class="cards">
  <div class=" third bg-inf p-4 text-center">
           <img src="https://img.icons8.com/110/110/todo-list"/>
          <h5 className="projectt">Todo List</h5>
          <p class="line3">This is a simple todo list developed with Javascript and css,designed to quickly see what your tasks are for the day and can easily add and delete tasks from the list.</p>
          {/* <button type="button" class="btn btn-warning">GitHub</button> */}
          <a href="https://github.com/DGgithubDG/New-Todo-List" class="btn btn-warning">GitHub</a>

  
      </div>
      </div>
    
  </div>
       </div>
             
      </div> 
</div>
<Footer />
</>
	);
};