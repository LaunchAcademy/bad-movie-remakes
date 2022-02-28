import fs from "fs"
import _ from "lodash"

const moviesPath = "movies.json"

class Movie {
  constructor({ id, title, description }) {
    this.id = id
    this.title = title
    this.description = description
  }

  static findAll() {
    const stringifiedData = fs.readFileSync(moviesPath)
    const movieData = JSON.parse(stringifiedData).movies
    const movies = movieData.map((movie) => new Movie(movie))
    return movies
  }

  static findById(id) {
    const movies = Movie.findAll()
    return movies.find((movie) => movie.id === id)
  }

  static getNextMovieId() {
    const maxMovie = _.maxBy(this.findAll(), (movie) => movie.id)
    return maxMovie.id + 1
  }

  save() {
    this.id = Movie.getNextMovieId()
    const currentMovies = Movie.findAll()
    currentMovies.push(this)
    fs.writeFileSync(moviesPath, JSON.stringify({ movies: currentMovies }))
  }
}

export default Movie
