import React from 'react'
import Nav from './Nav'
import Team from './Team'
import Search from './Search'
import {Route} from 'react-router-dom'
import Display from './Display'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

render() { 
return (
  <div>
    <Nav />
    <br/>
    <Route path='/' component={Search}/>
    <Display/>
    <Team/>
  </div>
 )  

 }
}


export default App