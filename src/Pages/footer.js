import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import DGlogo from './DGlogo.jpg'

// , { Component } 

export const Footer = () => (
  <footer class="footer" style={{backgroundColor: '#f2f2f2'}}>
  
    <div class=" py-3 py-md-5 py-xl-8 border-top border-light-subtle">
      <div class="container overflow-hidden">
        <div class="row gy-3 gy-md-5 gy-xl-0 align-items-sm-center">
          <div class="col-xs-12 col-sm-6 col-xl-3 order-0 order-xl-0">
            <div class="footer-logo-wrapper text-center text-sm-start">
              <a href="#!">
                <img src={DGlogo} alt="BootstrapBrain Logo" width="75" height="37"/>
              </a>
            </div>
          </div>
  
          <div class="col-xs-12 col-xl-6 order-2 order-xl-1">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link link-secondary px-2 px-md-3" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary px-2 px-md-3" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary px-2 px-md-3" href="/projects">Projects</a>
              </li>
       
          
            </ul>
          </div>
  
          <div class="col-xs-12 col-sm-6 col-xl-3 order-1 order-xl-2">
            <ul class="nav justify-content-center justify-content-sm-end">
             <li class="nav-item">
                <a class="nav-link link-dark px-3" href="https://www.linkedin.com/in/denis-g-4a449525b/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-dark px-3" href="https://github.com/DGgithubDG">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M7.999 0C3.582 0 0 3.582 0 8c0 3.54 2.299 6.533 5.48 7.589.4.073.547-.174.547-.386 0-.19-.007-.693-.01-1.36-2.233.485-2.695-1.072-2.695-1.072-.364-.924-.889-1.17-.889-1.17-.727-.497.055-.487.055-.487.803.057 1.225.825 1.225.825.714 1.22 1.874.868 2.33.663.073-.516.278-.868.505-1.068-1.773-.2-3.633-.887-3.633-3.943 0-.872.312-1.587.824-2.146-.083-.202-.36-1.015.079-2.117 0 0 .672-.215 2.2.82.638-.177 1.318-.266 2-.269.68.003 1.362.092 2 .269 1.523-1.035 2.195-.82 2.195-.82.44 1.102.163 1.915.08 2.117.515.559.822 1.274.822 2.146 0 3.064-1.864 3.742-3.645 3.938.286.247.543.733.543 1.479 0 1.068-.01 1.928-.01 2.191 0 .214.145.464.55.385C13.704 14.53 16 11.538 16 8c0-4.418-3.582-8-8-8z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class=" py-3 py-md-5 border-top border-light-subtle">
      <div class="container overflow-hidden">
        <div class="row">
          <div class="col">
            <div class="footer-copyright-wrapper text-center">
              &copy; 2024. All Rights Reserved.
            </div>
            <div class="credits text-secondary text-center mt-2 fs-7">
              Built by <a href="https://denisng.netlify.com/" class="link-secondary text-decoration-none">Denis Getov</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </footer>
);