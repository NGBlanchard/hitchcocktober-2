import React from 'react';
import List from './List/List'

export default class Hitchcocktober extends React.Component {
  state = {
    obj: [],
  }
    
  
  componentDidMount() {
    return fetch(`https://api.themoviedb.org/3/person/2636/combined_credits?api_key=ade0ae9f4c2baf41d573830c1009b757&language=en-US&page=1&include_adult=false`, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res => this.setState({
        obj: res.crew.filter(movie => movie.job === "Director")})
      )
  }
  
renderlist() {
  return this.state.obj.map(movie =>
    <List
      key={movie.id}
      title={movie.original_title}
      movie={movie}
    />
      )
}
  
    
  render() {
    return (
      <div>
        {this.renderlist()}
      </div>
      )
    
}
}

