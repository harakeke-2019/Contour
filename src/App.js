import React from 'react'
import request from 'superagent'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: 'batman',
      data: []
    }
    }
  
  componentDidMount () {
    const URL = 'https://api.themoviedb.org'
    const API_KEY = '81009ccb87e4c64254d9e74c695d113a'
    const MOVIE_URL = `${URL}/3/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`
    request.get(MOVIE_URL)
    // .then(console.log)
    .then(res => {
      this.setState ({
        data: res.body.results
      })
    })
  }

  

render() {
  console.log(this.state.data)
  
  const items  = this.state.data.map(el => {
    return ( <li>{el.title}</li>)
  }) 
return  <React.Fragment>
    {items}
  </React.Fragment>

  }
}

export default App