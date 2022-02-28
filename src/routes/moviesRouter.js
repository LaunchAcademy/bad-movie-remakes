import express from "express"

import Movie from "../models/Movie.js"

const moviesRouter = new express.Router()

moviesRouter.get("/", (req, res) => {
  res.status(200).render("movies/index", { movies: Movie.findAll() })
})

moviesRouter.get("/:id", (req, res) => {
  const id = req.params.id
  const movie = Movie.findById(parseInt(id))
  if (movie) {
    res.status(200).render("movies/show", { movie })
  } else {
    res.status(404).send("Movie not found")
  }
})

export default moviesRouter
