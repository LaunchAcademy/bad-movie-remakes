# To use this code for a clinic ensure you are on the starter-code branch and then work through the following

- Model has already been provided for use in the router

- root route is currently sending text back as the response.

  - change root route to redirect to /movies

- create new route for get action

  - define movie as an object with empty values
  - send the movie object in the render

- create index

  - use findAll method in the model
  - render with movies:movies
  - establish links to show page urls

- create show page
  - use findById method in the model
  - use .find to located movie id
  - conditionally render the show or a 404
