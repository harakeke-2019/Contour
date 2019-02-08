import React from 'react'
// import request from 'superagent'

// import { Form, Button } from 'semantic-ui-react'

class Team extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
    }

render() {
return (
<section id="Team" class="my-5 text-center">
    <div class="container">

      <div class="row">
        <div class="col">
          <div class="info-header mb-5">
            <h1 class="text-primary pb-3">
              Component Option 4 - Contours Creative Crew
            </h1>
            <p class="lead pb-3"></p>
          </div>
        </div>
      </div>

      <div class="row">
          <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img src="img/luke.jpg" alt="" class="img-fluid w-70 mb-3"/>
                  <h3>Aubrey</h3>
                  <h5 class="text-muted">Op2</h5>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ex beatae eaque, totam architecto veritatis, non consequatur perspiciatis, quis expedita enim quo quos dignissimos ad doloribus autem vel porro minus?</p>
                  <div class="d-flex flex-row justify-content-center">
                  </div>
                </div>
              </div>
            </div>
        <div class="col-lg-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <img src="img/stormtrooper.jpg" alt="" class="img-fluid w-70 mb-3"/>
              <h3>Ben </h3>
              <h5 class="text-muted">Opt1</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, rerum doloribus ullam earum fugiat optio, omnis distinctio alias excepturi nisi beatae. Tempora excepturi voluptate dicta doloremque tempore obcaecati, dolorum voluptas.</p>
              <div class="d-flex flex-row justify-content-center">
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <img src="img/ahsoka.jpg" alt="" class="img-fluid w-70 mb-3"/>
              <h3>Ngapeita </h3>
              <h5 class="text-muted">Opt2 </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos quia cumque impedit, reiciendis atque dolorum assumenda dolores nemo pariatur placeat rerum officiis voluptate. Eius quo odit quidem veritatis excepturi.</p>
              <div class="d-flex flex-row justify-content-center">
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <img src="img/princessleia.jpg" alt="" class="img-fluid w-70 mb-3"/>
              <h3>Jess</h3>
              <h5 class="text-muted">Opt3</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quae blanditiis sint doloribus ipsum pariatur dolor expedita? Facilis aliquid quasi ratione quidem facere esse vitae? Ratione veniam nihil quos suscipit? </p>
              <div class="d-flex flex-row justify-content-center">
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body">
                <img src="img/darthvader.jpg" alt="" class="img-fluid w-70 mb-3"/>
                <h3>Fetuolemoana</h3>
                <h5 class="text-muted">Op4</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ex beatae eaque, totam architecto veritatis, non consequatur perspiciatis, quis expedita enim quo quos dignissimos ad doloribus autem vel porro minus?</p>
                <div class="d-flex flex-row justify-content-center">
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </section>
    )
    }}
      
export default Team