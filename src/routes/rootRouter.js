import express from "express"
import Movie from "../models/Movie.js"

const rootRouter = new express.Router()

rootRouter.get("/", (req, res) => {
  res.render("movies/index", { movies: Movie.findAll() })
})

export default rootRouter