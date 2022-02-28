import fs from "fs"
import _ from "lodash"

//Establish path to json file outside class
class Movie {
  constructor() {}

  static findAll() {
    //read in the file
    //parse to json
    //create Movie objects from data
    //return array of Movie objects
  }

  static findById(id) {
    //get all movies
    //return found movie by matching id to movie.id
  }

  static getNextMovieId() {
    //use lodash to find the movie with highest id
    // then we increment the id by 1
  }

  save() {
    //set id
    //get current movies
    //push this to movies array
    //write to json file
  }
}

export default Movie
