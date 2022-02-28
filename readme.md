# To use this code for a clinic ensure you are on the Monday-Clinic-Starter-Code branch and then work through the following

## Model has already been provided for use in the router

## Root route is currently sending text back as the response

- Change root route to redirect to /movies

## Create moviesRouter

- Import and use in the rootRouter

## Create view at movies/index

- Make an h1 and a ul
- The ul should be set up with an li containing an anchor tag
- The text of the link should be the title of the movie

## Define route at /

- Use Movie.findAll and return movies along with the render of the view movie/index

## Make view dynamic

- log the movies to show data coming in
- use handlebars 'each' to iterate the movies array
- href should go to /movies/:id

## Create show page

- Create an h2 with the movie title as its text
- Use a p tag to display the description
- Include a link back to index

## Define route at /:id

- Use req.params.id to store the value in a variable
- Explain that it will need to be parsed if we want to use as number
- use findById method in the model
- conditionally render the show or a 404
