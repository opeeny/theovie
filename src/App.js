import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    rows:[],
  }

  movies = [
    {id: 0, title: 'Avenger', overview: 'As the avengers and their allies have conti'},
    {id: 1, title: 'The avengers', overview: 'As the avengers '},
  ]

  movieRows = [];


  render() {

    return (
      <div className = "App">
       
        <table className = "titleBar">
          <tbody>
            <tr>
              <td><img  width = "50" src = "https://opeeny.github.io/images/opeeny.jpg" alt = "opeeny app icon"/></td>
              <td width = "8"/>
              <td><h1>Movie DB search</h1></td>
            </tr>
          </tbody>
        </table>
        <input style = {{fontSize: 24, display: 'block', width: '100%', paddingTop: 8, paddingBottom: 8, paddingLeft: 16}} placeholder = "Enter search term"/>
        {/* {this.state.rows} */}
       
        {  this.movies.forEach(movie =>{
           console.log(movie.title);
          // console.log('Before', this.movieRows);
          this.movieRows.push(<p key = {movie.id}>{movie.title}</p>);
          console.log('Now', this.movieRows);
        })}
        {this.movieRows} 
      </div>
    )
  }
}
export default App;
