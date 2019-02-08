import React from 'react'

class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
    }

render() {
return (
    <div>
    <section class="py-3 text-center bg-light">
    <div class="container">
      <div class="row">
        <div class="col">
            <h1 class="text-primary pb-3">
            Component Div Option 1 - Plain
            </h1>
              <p class="lead">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, veniam iure esse in dignissimos animi excepturi vitae, dolorum illum perspiciatis magnam accusamus voluptates numquam impedit. Necessitatibus dolorum impedit unde tempora. <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus pariatur officiis a natus qui tempore omnis reprehenderit quasi, assumenda quo nesciunt amet placeat voluptatibus saepe. Delectus sit unde vel sunt?
                
                Nga mihi nui.
              </p>
        </div>
      </div>
    </div> 
</section>
 <section id="boxes"  class="my-5 text-center">
    <div class="container">
        <h1 class="text-primary pb-3" id="boxes">Component Div Option 2 - Boxes </h1>
      <div class="row">
        <div class="col-md-3">
          <div class="card text-center bg-primary text-white">
            <div class="card-body">
              <h3>component 2a</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, veniam iure esse in dignissimos animi excepturi vitae, dolorum illum perspiciatis magnam accusamus voluptates numquam impedit. Necessitatibus dolorum impedit unde tempora.
                
                  Nga mihi nui.
                </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center bg-primary text-white">
            <div class="card-body">
              <h3>component2b</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, veniam iure esse in dignissimos animi excepturi vitae, dolorum illum perspiciatis magnam accusamus voluptates numquam impedit. Necessitatibus dolorum impedit unde tempora.
                
                  Nga mihi nui.
                </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center bg-primary text-white">
            <div class="card-body">
              <h3>Component 2c</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, veniam iure esse in dignissimos animi excepturi vitae, dolorum illum perspiciatis magnam accusamus voluptates numquam impedit. Necessitatibus dolorum impedit unde tempora.
                
                  Nga mihi nui.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

        <section id="accordion" class="py-5 text-center bg-light">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="info-header mb-5">
                    <h1 class="text-primary pb-3"> Component Option 3 - Accordion </h1>
                    <p class="lead pb-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates accusamus veritatis numquam voluptate animi? Earum veritatis, perspiciatis laudantium esse repellat nam dicta est ad possimus? Blanditiis inventore dolores autem accusamus!
                    </p>
                  </div>

        <div id="accordion" role="tablist">

          <div class="card">
            <div class="card-header" id="heading1">
              <h5 class="mb-0">
                <div href="#collapse1" data-toggle="collapse" data-parent="#accordion">
                  <i class="fa fa-arrow-circle-down"></i> Component Placement Option
                </div>
              </h5>
            </div>
            <div id="collapse1" class="collapse">
              <div class="card-body">
                <h4>lorem </h4>  
                  <h5 class="lead pb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi omnis cumque voluptate non ipsam quis in. Id excepturi amet, nisi nostrum fuga praesentium iste rerum cum quasi tenetur assumenda.
                  </h5>   
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="heading2">
              <h5 class="mb-0">
                <div href="#collapse2" data-toggle="collapse" data-parent="#accordion">
                  <i class="fa fa-arrow-circle-down"></i> Component Placement Option
                </div>
              </h5>
            </div>
            <div id="collapse2" class="collapse">
              <div class="card-body">
                  <h4>lorem</h4>
                  <h5 class="lead pb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolorum facere dolor tenetur nam labore, repellendus totam ipsam exercitationem eveniet consequatur, facilis velit voluptates alias ipsa quibusdam beatae eaque quasi!
                  </h5>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="heading3">
              <h5 class="mb-0">
                <div href="#collapse3" data-toggle="collapse" data-parent="#accordion">
                  <i class="fa fa-arrow-circle-down"></i> Component  Placement Option
                </div>
              </h5>
            </div>
            <div id="collapse3" class="collapse">
              <div class="card-body">
                <h4>Lorem</h4>
                  <h5 class="lead pb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolorum facere dolor tenetur nam labore, repellendus totam ipsam exercitationem eveniet consequatur, facilis velit voluptates alias ipsa quibusdam beatae eaque quasi!
                  </h5>                  
              </div>
            </div>
          </div>

          <div class="card">
              <div class="card-header" id="heading4">
                <h5 class="mb-0">
                  <div href="#collapse4" data-toggle="collapse" data-parent="#accordion">
                    <i class="fa fa-arrow-circle-down"></i> Component  Placement Option
                  </div>
                </h5>
              </div>
              <div id="collapse4" class="collapse">
                <div class="card-body">
                    <h4>lorem</h4>
                      <h5 class="lead pb-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolorum facere dolor tenetur nam labore, repellendus totam ipsam exercitationem eveniet consequatur, facilis velit voluptates alias ipsa quibusdam beatae eaque quasi!
                      </h5>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
)}
}

export default Display