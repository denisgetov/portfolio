import logo from './logo.svg';
import './index.css';
import { Link } from "react-router-dom"
import { Navbar } from './Pages/Navbar';
import { Footer } from './Pages/footer';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div>
      <Navbar />
      <div className="background">
<section class="py-3 py-md-5">
  <div class="container mb-4 mb-md-5">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-xxl-8">
        <img class="img-fluid rounded shadow" loading="lazy" src="./assets/img/about-img-1.jpg" alt=""/>
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row gy-2 gy-md-0 justify-content-xxl-center">
      <div class="col-12 order-md-1 col-md-8 col-xxl-6">
        <div class="text-center text-md-start">
          <h2 class="display-3 fw-bold lh-1">Denis Getov</h2>
          <p class="text-secondary fs-4 mb-2">Full-Stack Developer</p>
          <hr class="w-25 mx-auto ms-md-0 mb-4 text-secondary"/>
          <p>Junior full stack web developer proficient in fundamental front-end and back-end languages.In-depth knowledge of Python,JavaScript and MySQL.Analytical and precise with hands-on experience taking charge of front and back-end web development.Skilled in creating databases for functionality, design and developing APIS.Hardworking collaborator with track record of superior results.</p>
          <p>I currently work as a full-stack developer at King J technologies In Naxxar, Malta. I am responsible for the development and functionality of online casinos.
Front-end technologies I use are JavaScript with React.js and css.The back-end consists of PHP with Laravel paired along with TSQL. (Feb2023- present)</p>
          {/* <p>My favorite project I have worked on is a full-stack web app that allows people to tour east Africa for the cheapest and most convenient ways possible.This was great because i learnt not only about how to make a web app responsive but also about the natural beauty of Africa.</p> */}
        </div>
      </div>
      <div class="col-12 order-md-0 col-md-4 col-xxl-4">
        <div class="text-center text-md-start me-md-3 me-xl-5">
          <p class="mb-4">
            <span class="d-block display-6 lh-1">2+</span>
            <span class="fs-4 text-secondary">years of experience</span>
          </p>
          <div class="d-grid">
         <button class="btn btn-primary btn-lg" type="button" ><a href="mailto:denisng666@gmail.com" style={{color: 'white', textDecoration: 'none'}}>Contact Me</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div> 
      <Footer />
      </div>

  );
}

export default App;
