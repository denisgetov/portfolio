import logo from './logo.svg';
import './index.css';
import { Link } from "react-router-dom"
import { Navbar } from './Pages/Navbar';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (

    <div>
      <Navbar />
      <div className="background">
    <div className="container">
      <h1 className="hometitle">Hey There ! 👋</h1>


      <div class="hometitle">
      <div class="row">
    <div class="col-8">      <div className="text-center"> <div class="d-flex "><h1>Let Me Introduce  </h1> <h1 className="eleven"> Myself</h1></div></div>
</div>
    <div class="col-4"></div>
  </div>
</div>
<div className="row1">
<div class="row">
  <div class="col-md-8"><ul>Throughout high school, I had always excelled in academics. My mother is a college professor and my father</ul><ul>Throughout high school, I had always excelled in academics. My mother is a college professor and my father</ul><ul>Throughout high school, I had always excelled in academics. My mother is a college professor and my father</ul> </div>

  <div class="col-md-4 text-end"></div>
  {/* <img src={avatarsvg}></img> */}
  {/* <FcBusinessman size={100}/> */}
</div>
</div>


	  {/* <div className="container">
	<div className="mainhome"><h2>I'm</h2>
	<h2 className="Denis">Denis Getov</h2>
	</div>
	
	</div> */}





{/* <div class="container">
  <div class="row">
    <div class="col">
	<h2>I'm Denis Getov</h2>
	<h2 className="insidethehome">Full-Stack Developer</h2>
    </div>
    <div class="col">
	<p className="gif text-end"><img src={svg} class="img-thumbnail"/></p>   
    </div>
  </div>
  </div> */}
  {/* <div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
	<p className="gif text-end"><img src={avatarsvg} class="img-thumbnail"/></p>   
    </div>
  </div>
  <div class="column" >
  <p className="profilesvg text-end"><img src={profilesvg} class="img-thumbnail"/></p>   
  </div>
</div> */}

		<div className="text-center">
<h3 className="home-link">Find Me On</h3>


            

            
<footer class="text-center text-dark" >
  <div class="container pt-4">
    <section class="mb-4">
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-light m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="light"
        ><i class="fab fa-instagram"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-light m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="light"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    </section>
  </div>

  <div class="text-center text-light p-3" >
    © 2020 Copyright:
    <a class="text-light" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
			  </div>
        
  
  
            

       
  
    
       </div>
             
      </div> 
      </div>
//     <div>
//       <div id="stars"></div>
// <div id="stars2"></div>
// <div id="stars3"></div>
// <div id="title">

// </div>
//     </div>
  );
}

export default App;
