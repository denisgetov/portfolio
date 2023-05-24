import React, { Component } from "react";

export const Footer = () => (
	<>
<footer class="foot bg-black text-center text-white">

  <div class="text-center p-3" >
    © 2023 Copyright owned by Denis Getov
    <a class="text-white" href="https://denisgetov.com/"> www.denisgetov.com</a>
 
  </div>
  <a
        class="btn btn-link btn-floating btn-lg text-light m-1 text-start"
        href="https://www.linkedin.com/in/denis-g-4a449525b/"
        role="button"
        data-mdb-ripple-color="light"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-light m-1"
        href="https://github.com/DGgithubDG"
        role="button"
        data-mdb-ripple-color="light"
        ><i class="fab fa-github"></i
      ></a>
</footer>
</>
);