# NAME

The Metropolitan Museum of Art's Collection of Vincent van Gogh

## DESCRIPTION 

This application renders the artwork of Vincent van Gogh in the collection of the Metropolitan Museum of Art in New York, New York. 

Special thanks to the Met Museum for their open API 
    - https://www.metmuseum.org/
    - https://metmuseum.github.io/

---------------------------------------------------------------------------------
REACT COMPONENT HIERARCHY:

App.js
    -Home
    -Images 
        -Cards
            -Card
    -Favorites
---------------------------------------------------------------------------------

The application comes preloaded with the unique object ID for van Gogh paintings, and upon loading the `Images` page, the application calls the Met API for the image IDs. 

The `Card` component loads each image as an individual card with a form to submit a comment and  

Users may submit their name and comment on the individual image. The image ID, name and comment are sent as a POST to the db.JSON. 

The `Favorites` component loads the contents of db.json via API call and then sets the array of objects into a local state. Following this, component renders all the images which were commented upon. **Note** Every comment submitted for an image is treated as a unique entry, that is, the same image may render multiple times on this page if multiple comments were submitted about the image.


This project was developed to meet Flatiron School's Phase 2 React module requirement.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### INSTALLATION  

From the application folder, run `npm start`. This will load the application. 

Run `json-server --watch db.json` to start the JSON DB.  

#### USAGE 

Upon initialization, the application will take you to the `Home` page. From there, you can navigate to `Images` from the navigation bar at the top of the page. 

`Images` page will load all the unique van Gogh paintings onto the webpage. Each painting will have a corresponding form with "Name" and "Comment" as open text fields. Click "Submit" to persist the comment to the database. 

`Favorites` page will show the user all the images with comments as individual cards.
