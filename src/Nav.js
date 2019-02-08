import React from 'react'
// import request from 'superagent'

// import { Form, Button } from 'semantic-ui-react'

class Nav extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
       
      }
    }
  
  render() { 
  return (
<div>
    <nav class="navbar navbar-expand-md navbar-light fixed-top py-4">
    <div class="container">
        <h3 class="d-inline align-middle"> 
          Nevermind Netflix - use Contour-Flix
        </h3>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
           <li class="nav-item">
            <a href="#home" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#accordion" class="nav-link">Component 1</a>
          </li>
          <li class="nav-item">
            <a href="#boxes" class="nav-link">List</a>
          </li>
          <li class="nav-item">
            <a href="#Team" class="nav-link">Team Contour</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section id="showcase" class="py-5">
    <div class="primary-overlay text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-center showcasetext">
            <h1 class="display-4 mt-5 pt-5 "> CONTOUR-FlIX </h1>
              <p class="lead">
              </p>
              <a href="#statement" class="btn btn-outline-secondary btn-lg text-white" >
              <i class="fa fa-arrow-right"></i> Watch Free for 30 Days
              </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
   )  
  
   }
  }
  
  
  
  export default Nav
  
  