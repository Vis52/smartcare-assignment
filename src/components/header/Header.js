import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><h2>Smart Care</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-5">
        <li class="nav-item">
          <a class="nav-link  ms-3" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-3" href="/Feature">Features</a>
        </li>
         <li class="nav-item">
          <a class="nav-link ms-3" href="/test">Testmonials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-3" href="/contact">Contact</a>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
