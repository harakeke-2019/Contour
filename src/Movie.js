import React from 'react';
import request from 'superagent'


const Movie = props => {

    const data = []
    const idValue = props.match.params.id
    const MOVIE_API = `https://api.themoviedb.org/3/movie/${idValue}?api_key=81009ccb87e4c64254d9e74c695d113a&language=en-US`

    request.get(MOVIE_API)
      .then(res => data.push(res.body))
    console.log(idValue)
    console.log(data.title)
    //data.map(item => console.log(item))

    return (
        <div>
        </div>
    )
}

export default Movie