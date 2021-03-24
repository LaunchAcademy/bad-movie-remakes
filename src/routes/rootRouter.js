import express from "express"
import Movie from "../models/Movie.js"
import moviesRouter from "./moviesRouter.js"

const rootRouter = new express.Router()

rootRouter.get("/", (req, res) => {
  res.render("movies/index", { movies: Movie.findAll() })
})

rootRouter.use("/movies", moviesRouter)

export default rootRouter