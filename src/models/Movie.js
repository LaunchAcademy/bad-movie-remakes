import fs from "fs"
import _ from "lodash"

//Establish path to json file outside class
const moviesPath = "movies.json"

class Movie {
  constructor({ id, title, description }) {
    this.id = id
    this.title = title
    this.description = description
  }

  static findAll() {
    //read in the file
    const stringifiedData = fs.readFileSync(moviesPath)
    //parse to json
    const movieData = JSON.parse(stringifiedData).movies
    //create Movie objects from data
    const movies = movieData.map((movie) => new Movie(movie))
    //return array of Movie objects
    return movies
  }

  static getNextMovieId() {
    //use lodash to find the movie with highest id
    const maxMovie = _.maxBy(this.findAll(), (movie) => movie.id)
    // then we increment the id by 1
    return maxMovie.id + 1
  }

  save() {
    //set id
    this.id = Movie.getNextMovieId()
    //get current movies
    const currentMovies = Movie.findAll()
    //push this to movies array
    currentMovies.push(this)
    //write to json file
    fs.writeFileSync(moviesPath, JSON.stringify({ movies: currentMovies }))
  }
}

export default Movie
