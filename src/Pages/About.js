import React from "react";
import { Link } from "react-router-dom";
import { DiPython } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { SiMysql } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { SiFlask } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { AiFillGithub } from 'react-icons/ai';
import { SiBootstrap } from 'react-icons/si';
import { Navbar } from "./Navbar";
import { Footer } from "./footer";

export const About = () => {
	return (
		<>
          <Navbar />

     <div className="background" >
      <div className="text-center"> <div class="d-flex justify-content-center"><h1>Professional  </h1> <h1 className="eleven"> Skillset</h1></div>
</div>
      {/* <h6 className="abttitle text-center">Here Are A Few Of My Recent Projects</h6> */}

  <div class="container mt-4 d-flex justify-content-center">
           
           <div class="row g-0">
  
             <div class="col-md-4 border-right">
                  <div class="cardss">
                      
                 
                  <div class="first bg-dark p-4 text-center">
                      {/* <img src="https://img.icons8.com/110/110/lion" /> */}
  
                      <h2 className="projecttt">PYTHON</h2>
                  <p class="line1 text-align">      <DiPython size={140}/>
</p>
                  {/* <button type="button" href="https://github.com/LOGEDI/Safari_Adventure" class="btn btn-warning">GitHub</button> */}
                  {/* <a href="https://github.com/LOGEDI/Safari_Adventure" class="btn btn-warning">GitHub</a> */}
{/* gitpod changes */}
                  </div>
  
                   </div>
                    
             </div>

          <div class="col-md-4">
  
              <div class="cardss">
              <div class=" third bg-dark p-4 text-center">
                       {/* <img src="https://img.icons8.com/110/110/star-wars"/> */}
                      <h2 className="projecttt">MYSQL</h2>
                      <p class="line3 ">        <SiMysql size={140}/>
</p>
                      {/* <button type="button" class="btn btn-warning">GitHub</button> */}
                      {/* <a href="https://github.com/" class="btn btn-warning">GitHub</a> */}

  
                  </div>
                  </div>
          </div>
  
          <div class="col-md-4">
  
  <div class="cardss">
  <div class=" third bg-dark p-4 text-center">
           {/* <img src="https://img.icons8.com/110/110/user"/> */}
          <h2 className="projecttt">JAVASCRIPT</h2>
          <p class="line3">   <DiJavascript1 size={140}/>
</p>
          {/* <button type="button" class="btn btn-warning">GitHub</button> */}
          {/* <a href="https://github.com/" class="btn btn-warning">GitHub</a> */}

  
      </div>
      </div>
  
  </div>
  
       </div>
             
      </div> 

      <div class="container mt-4 d-flex justify-content-center">
           
           <div class="row g-0">
  
             <div class="col-md-4 border-right">
                  <div class="cardss">
                      
                 
                  <div class="first bg-dark p-4 text-center">
                      {/* <img src="https://img.icons8.com//110/110/cards.png" /> */}
  
                      <h2 className="projecttt">REACT</h2>
                  <p class="line1">        <GrReactjs size={140} />
</p>
                  {/* <button type="button" class="btn btn-warning">GitHub</button> */}
                  {/* <a href="https://github.com/" class="btn btn-warning">GitHub</a> */}

  
                  </div>
  
                   </div>
                    
             </div>

          <div class="col-md-4">
  
              <div class="cardss">
              <div class=" third bg-dark p-4 text-center">
              {/* <img src={insta}></img>  */}
              {/* <img src="https://img.icons8.com/110/110/database" /> */}

                      <h2 className="projecttt">      <h2 class="card-title">FLASK</h2>
</h2>
                      <p class="line3"><SiFlask size={140}/></p>
                      {/* <button type="button" class="btn btn-warning">GitHub</button> */}
                      {/* <a href="https://github.com/" class="btn btn-warning">GitHub</a> */}

  
                  </div>
                  </div>
  
          </div>
  
          <div class="col-md-4">
  
  <div class="cardss">
  <div class=" third bg-dark p-4 text-center">
           {/* <img src="https://img.icons8.com/110/110/todo-list"/> */}
          <h2 className="projecttt">CSS</h2>
          <p class="line3">        <SiCss3 size={140}/>
</p>
          {/* <button type="button" class="btn btn-warning">GitHub</button> */}
          {/* <a href="https://github.com/" class="btn btn-warning">GitHub</a> */}

  
      </div>
      </div>
    
  </div>
       </div>
             
             
      </div> 

      <div className="text-center"> <div class="d-flex justify-content-center"><h1>Tools I   </h1> <h1 className="eleven"> Use</h1></div></div>
      {/* <h6 className="abttitle text-center">Here Are A Few Of My Recent Projects</h6> */}

  <div class="container mt-4 d-flex justify-content-center">
           
           <div class="row g-0">
  
             <div class="col-md-4 border-right">
                  <div class="cardss">
                      
                 
                  <div class="first bg-dark p-4 text-center">
                      {/* <img src="https://img.icons8.com/110/110/lion" /> */}
  
                      <h2 className="projecttt">VSCODE</h2>
                  <p class="line1 text-align">      <TbBrandVscode size={140}/>
</p>
                  {/* <button type="button" href="https://github.com/LOGEDI/Safari_Adventure" class="btn btn-warning">GitHub</button> */}
                  {/* <a href="https://github.com/LOGEDI/Safari_Adventure" class="btn btn-warning">GitHub</a> */}

                  </div>
  
                   </div>
                    
             </div>

          <div class="col-md-4">
  
              <div class="cardss">
              <div class=" third bg-dark p-4 text-center">
                       {/* <img src="https://img.icons8.com/110/110/star-wars"/> */}
                      <h2 className="projecttt">GITHUB</h2>
                      <p class="line3 ">        <AiFillGithub size={140}/>
</p>
                      {/* <button type="button" class="btn btn-warning">GitHub</button> */}
                      {/* <a href="https://github.com/" class="btn btn-warning">GitHub</a> */}

  
                  </div>
                  </div>
          </div>
  
          <div class="col-md-4">
  
  <div class="cardss">
  <div class=" third bg-dark p-4 text-center">
           {/* <img src="https://img.icons8.com/110/110/user"/> */}
          <h2 className="projecttt">BOOTSTRAP</h2>
          <p class="line3">   <SiBootstrap size={140}/>
</p>
          {/* <button type="button" class="btn btn-warning">GitHub</button> */}
          {/* <a href="https://github.com/" class="btn btn-warning">GitHub</a> */}

  
      </div>
      </div>
  
  </div>
  
       </div>
             
      </div> 
      

</div>
    {/* <div className="background">
<h1 className="abttitle text-center">Professional Skillset</h1>
<div class="about card-group">
  <div class="abt card ">
    <div class="abt card-body">
      <h5 class="card-title text-center">PYTHON</h5>
      <p class="card-text text-center">
      <DiPython size={140}/>
      </p>
    </div>
  </div>
  <div class="abt card">

    <div class="abt card-body  text-center">
      <h5 class="card-title">MYSQL</h5>
      <p class="card-text">
        <SiMysql size={140}/>
      </p>
    </div>
  </div>
  <div class="abt card  text-center">
    <div class="card-body">
      <h5 class="card-title">JAVASCRIPT</h5>
      <p class="card-text">
   <DiJavascript1 size={140}/>
      </p>
    </div>
  </div>
</div>

<div class="about card-group  text-center">
  <div class="abt card">
    <div class="abt card-body">
      <h5 class="card-title text-center">REACT</h5>
      <p class="card-text">
        <GrReactjs size={140} />
      </p>
    </div>
  </div>
  <div class="abt card">

    <div class="abt card-body  text-center">
      <h5 class="card-title">FLASK</h5>
      <p class="card-text"><SiFlask size={140}/>
      </p>
    </div>
  </div>
  <div class="abt card text-center">
    <div class="card-body">
      <h5 class="card-title">CSS3</h5>
      <p class="card-text">
        <SiCss3 size={140}/>
      </p>
    </div>
  </div>
  
</div>
<h1 className="abttitle text-center">Tools I Use</h1>

<div class="about card-group">
  <div class="abt card">
    <div class="abt card-body">
      <h5 class="card-title text-center">VS CODE</h5>
      <p class="card-text text-center">
      <TbBrandVscode size={140}/>
      </p>
    </div>
  </div>
  <div class="abt card">

    <div class="abt card-body  text-center">
      <h5 class="card-title">GITHUB</h5>
      <p class="card-text">
        <AiFillGithub size={140}/>
      </p>
    </div>
  </div>
  <div class="abt card  text-center">
    <div class="card-body">
      <h5 class="card-title">BOOTSTRAP</h5>
      <p class="card-text">
   <SiBootstrap size={140}/>
      </p>
    </div>
  </div>
</div>
</div> */}
<Footer />
</>
	);
};