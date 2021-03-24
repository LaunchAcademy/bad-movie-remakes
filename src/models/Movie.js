import fs from 'fs'
import _ from "lodash"

const moviesPath = "movies.json"

class Movie {
  constructor({ id, title, description }) {
    this.id = id
    this.title = title
    this.description = description
  }

  static findAll() {
    // the below is a Buffer object -- we need to parse it in order for it do be a data structure!
    const rawData = fs.readFileSync(moviesPath)
    // below, we parse the data and use the `movies` key to get to the array of movies
    const  movieData = JSON.parse(rawData).movies
    // we then create Movie objects with our data
    const movies = movieData.map(movie => {
      return new Movie(movie)
    })
    return movies
  }

  static getNextMovieId() {
    // here we use the lodash `maxBy` helper to find the movie with the highest id
    const maxMovie = _.maxBy(
      this.findAll(),
      movie => movie.id
    )
    // then we increment the id by 1
    return maxMovie.id + 1
  }

  save() {
    // add a new id to my new movie
    this.id = this.constructor.getNextMovieId()
    // this.id = Movie.getNextMovieId() also works

    // read the current list of movies
    const currentMovies = this.constructor.findAll()
    // const currentMovies = Movie.findAll() also works

    // add my new movie to that list
    currentMovies.push(this)

    // save the new list of movies in my JSON file
    // we overwrite the file with our newly updated list of movies
    fs.writeFileSync(moviesPath, JSON.stringify({ movies: currentMovies }))
  }
}

export default Movie