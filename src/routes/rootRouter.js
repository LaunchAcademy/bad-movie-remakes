import express from "express"

import moviesRouter from "./moviesRouter.js"

const rootRouter = new express.Router()

//at root of site ('/')
rootRouter.get("/", (req, res) => {
  //redirect to url '/movies'
  res.redirect("/movies")
})

//if url path is /movies, the moviesRouter will take it from there
rootRouter.use("/movies", moviesRouter)

export default rootRouter
