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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DiFirebase } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { faJs, faPython, faReact, faSQL } from '@fortawesome/free-brands-svg-icons'; //
import { Navbar } from "./Navbar";
import { Footer } from "./footer";

export const About = () => {
	return (
    <div>
      <Navbar />
    <section class="py-3 py-md-5 py-xl-8">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h3 class="fs-6 text-secondary mb-2 text-uppercase text-center"></h3>
            <h2 class="mb-4 display-5 text-center">Professional Skillset</h2>
            <p class="fs-5 text-secondary mb-5 text-center">Below you can find the programming languages, frameworks and authentication systems I use.</p>
            <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
          </div>
        </div>
      </div>
    
      <div class="container overflow-hidden">
        <div class="row gy-4">
          <div class="col-6 col-md-4 col-xl-3 text-center">
            <div class="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 hover-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65" fill="currentColor" viewBox="0 0 100 65">
              <FontAwesomeIcon icon={faJs} size="3x" />
                          </svg>
            </div>
          </div>
          <div class="col-6 col-md-4 col-xl-3 text-center">
            <div class="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 hover-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65" fill="currentColor" viewBox="0 0 100 65">
              <FontAwesomeIcon icon={faPython} size="5x" />
              </svg>
            </div>
          </div>
          <div class="col-6 col-md-4 col-xl-3 text-center">
            <div class="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 hover-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65" fill="currentColor " viewBox="0 0 100 65">
              <FontAwesomeIcon icon={faReact} size="5x" />
              </svg>
            </div>
          </div>
          <div class="col-6 col-md-4 col-xl-3 text-center">
            <div class="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 hover-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65" fill="currentColor" viewBox="0 0 100 65">
              <SiMysql size="5x" />
              </svg>
            </div>
          </div>
          <div class="col-6 col-md-4 col-xl-3 text-center">
            <div class="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 hover-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65" fill="currentColor" viewBox="0 0 100 65">
              <SiBootstrap size="5x" />
              </svg>
            </div>
          </div>
          <div class="col-6 col-md-4 col-xl-3 text-center">
  <div class="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 hover-logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65" fill="currentColor" viewBox="0 0 100 65">
      <AiFillGithub size="5x" />
    </svg>
  </div>
</div>

          <div class="col-6 col-md-4 col-xl-3 text-center">
            <div class="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 hover-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65" fill="currentColor" viewBox="0 0 100 65">
              <TbBrandVscode size="5x" />
              </svg>
            </div>
          </div>
          <div class="col-6 col-md-4 col-xl-3 text-center">
            <div class="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 hover-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65" fill="currentColor" viewBox="0 0 100 65">
              <SiCss3 size="5x" />
              </svg>
            </div>
          </div>
          <div class="col-6 col-md-4 col-xl-3 text-center">
            <div class="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 hover-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65" fill="currentColor" viewBox="0 0 100 65">
              <DiFirebase size="5x" />
              </svg>
            </div>
          </div>
          <div class="col-6 col-md-4 col-xl-3 text-center">
            <div class="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 hover-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65" fill="currentColor" viewBox="0 0 100 65">
              <SiFlask size="5x" />
              </svg>
            </div>
          </div>
          <div class="col-6 col-md-4 col-xl-3 text-center">
            <div class="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 hover-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65" fill="currentColor" viewBox="0 0 100 65">
              <SiNextdotjs size="5x" />
              </svg>
            </div>
          </div>
          <div class="col-6 col-md-4 col-xl-3 text-center">
            <div class="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 hover-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65" fill="currentColor" viewBox="0 0 100 65">
              <SiTypescript size="5x" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
	);
};