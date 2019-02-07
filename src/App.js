import React from 'react'

import Search from './Search'
import {Route} from 'react-router-dom'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

render() { 
return (
  <div>
    <Route path='/' component={Search}/>
  </div>
 )  

 }
}


export default App