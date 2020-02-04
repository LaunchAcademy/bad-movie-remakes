const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
const hbsMiddleware = require("express-handlebars")
const fs = require("fs")

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)
app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const moviePath = path.join(__dirname, "../movies.json")

const getMovies = () => {
  const fileContents = fs.readFileSync(moviePath).toString()
  return JSON.parse(fileContents)
}

app.get("/", (req, res) => {
  res.send("Bad Movie DataBase")
})



app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

module.exports = app
