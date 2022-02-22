import express from "express"

import Movie from "../models/Movie.js"

const moviesRouter = new express.Router()

//get request at url /movies
moviesRouter.get("/", (req, res) => {
  //renders views/movies/index and passes an object with all of the movies
  res.render("movies/index", { movies: Movie.findAll() })
})

//get request at url /movies/new
moviesRouter.get("/new", (req, res) => {
  //renders views/movies/new.hbs
  res.render("movies/new")
})

//post request at url /movies
moviesRouter.post("/", (req, res) => {
  //get properties needed from req.body and trim() and extra whitespace
  const title = req.body.title.trim()
  const description = req.body.description.trim()

  //if title && description are not empty
  if (title && description) {
    //create a new instance of a Movie object so we can use the instance method .save()
    const newMovie = new Movie({ title: title, description: description })

    //persist to json file
    newMovie.save()

    //after saving, redirect to url /movies triggering another get request
    res.redirect("/movies")

    //At least one field is missing and that triggers the else block
  } else {
    //stays on form by rerendering /views/movies/new
    //passes in an object with an 'error' key
    res.render("movies/new", { error: "Please fill in all fields" })
  }
})

export default moviesRouter
