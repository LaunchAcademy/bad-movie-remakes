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
    const  movieData = JSON.parse(fs.readFileSync(moviesPath)).movies
    const movies = movieData.map(movie => {
      return new Movie(movie)
    })
    return movies
  }
}

export default Movie