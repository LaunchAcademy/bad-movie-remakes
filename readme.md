# To use this code for a clinic ensure you are on the Tuesday-Clinic-Starter-Code branch and then work through the following

## Build out Movie model

- Build constructor to match the json file objects.
- Create a file path variable outside of the class.
- Implement the findAll and findById methods.
- Verify the provided controller and views work with methods.

## Create view at movies/new

- Create form with inputs to match the Movie model.
- Make a link back to /movies under the form.

## Create route at /new

- Render view at movies/new

## Create post route at /

- Get inputs by using req.body
- If valid input, redirect to index page.
- Otherwise, render movies/new with an error message.
- Output error message on template.

## Save the movie to json file

- Implement getNextMovieId method.
- Explain what lodash does for us.
- Implement save method and test.
