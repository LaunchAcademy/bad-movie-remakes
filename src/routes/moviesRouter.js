import express from 'express'

import Movie from "../models/Movie.js"

const moviesRouter = express.Router()

// we put our new movie form at the "/movies/new" path
moviesRouter.get("/new", (req, res) => {
  res.render("movies/new")
})

// our post request goes to the "/movies" path
// this matches our `method` and `action` in our form
moviesRouter.post("/", (req, res) => {
  // grab the user's input and store them in variables
  // req.body looks like this:
  // { title: "New Title", description: "New Description" }
  const userTitle = req.body.title
  const userDescription = req.body.description

  // check if the user input all necessary information
  // by checking if those variables have content/are "truthy":
  if(userTitle && userDescription) {
    // create a new Movie and save it
    // create a new movie with key-value pairs of title and description, and hand it the user input
    const newMovie = new Movie({
      title: userTitle,
      description: userDescription
    })
    // save our movie to our JSON file -- we delegate the actual logic of this to our Movie class
    newMovie.save()
    // redirect them back to the index page
    // this sends a new GET request to our root path!
    res.redirect("/")
  } else {
    // rerender the page (keep them on the form page if they didn't properly submit)
    // this tells Express to render the template under `views/movies/new`
    res.render("movies/new")
  }
})

export default moviesRouter