import express from 'express'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'
import hbsMiddleware from 'express-handlebars'
import fs from 'fs'

const app = express()

// view engine setup
app.set('views', path.join(new URL('../views', import.meta.url).pathname))
app.engine(
  'hbs',
  hbsMiddleware({
    defaultLayout: 'default',
    extname: '.hbs',
  })
)
app.set('view engine', 'hbs')

app.use(logger('dev'))
app.use(express.json())

app.use(express.static(new URL('../public', import.meta.url).pathname))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const moviePath = path.join(new URL('../movies.json', import.meta.url).pathname)

const getMovies = () => {
  const fileContents = fs.readFileSync(moviePath).toString()
  return JSON.parse(fileContents)
}

app.get('/', (req, res) => {
  res.send('Hello from the backend')
})

app.get('/bad-movie-remakes/new', (req, res) => {
  //create a new movie object for th user to populate
  const movie = { title: '', description: '' }
  //present them with a form to enter the new movie
  //don't populate the error because the user hasn't
  //tried to do anything yet
  res.render('badMovieRemakes/new', { movie: movie })
})

app.get('/bad-movie-remakes/:movieTitle', (req, res) => {
  //getting the list of saved movies
  const movies = getMovies()
  //search the list for the movie specified in the url
  const movie = movies.find((movie) => {
    return movie.title === req.params.movieTitle
  })
  if (movie) {
    //found: render the template
    res.render('badMovieRemakes/show', { movie: movie })
  } else {
    //not found: render a 404
    res.status(404).send('Movie not found')
  }
})

app.get('/bad-movie-remakes', (req, res) => {
  const movies = getMovies()
  res.render('badMovieRemakes/index', { movies: movies })
})

app.post('/bad-movie-remakes', (req, res) => {
  //get the input: build a movie object
  const movie = { title: req.body.title, description: req.body.description }
  //check to see if the user specified a title
  if (movie.title.trim() !== '') {
    //do something with the input

    //get the list of already saved movies
    let movies = getMovies()
    //add the new movie to the list
    movies.push(movie)
    //replace the saved list of movies with our new list
    fs.writeFileSync(moviePath, JSON.stringify(movies))

    //redirect the user if successful
    res.redirect('/bad-movie-remakes')
  } else {
    //user didn't specify a title:
    //also, let them re-enter data and show them an error
    res.render('badMovieRemakes/new', {
      movie: movie,
      error: 'Could not save movie',
    })
  }
})

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is listening...')
})

export default app
