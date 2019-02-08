import React from 'react'
import request from 'superagent'

import { Form, Button } from 'semantic-ui-react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      data: []
    }
    }

    handleChange = event => {
      this.setState({
        searchTerm : event.target.value
      })
    }

    handleSubmit = event => {
      event.preventDefault();
      const URL = 'https://api.themoviedb.org'
      const API_KEY = '81009ccb87e4c64254d9e74c695d113a'
      const MOVIE_URL = `${URL}/3/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`

      request.get(MOVIE_URL)
        .then(res => {
          this.setState ({
            data: res.body.results
          })
        })
    
    
    }

render() {
  console.log(this.state.data)

  const items  = this.state.data.map((el, index) => {
    return ( <li key={index}>{el.title}</li>)
  }) 
  return  <React.Fragment>
    

    <Form class= 'search-container'onSubmit={this.handleSubmit}> 
            <Form.Field>
              <input  onChange={this.handleChange}/>
              <Button class='search-icon' positive>Search</Button>
            </Form.Field>
          </Form>
          {items}
  </React.Fragment>

  }
}

export default Search

