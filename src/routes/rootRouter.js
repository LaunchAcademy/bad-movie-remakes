import express from "express"

const rootRouter = new express.Router()

rootRouter.get("/", (req, res) => {
  res.send("Movie Database")
})

export default rootRouter
