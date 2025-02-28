const express = require('express');
const app = express();

/**
 * STEP 0: npm i express
 */

/**
 * STEP 1: Set up a "public" folder and add static files into it
 */

// added css html and the right js file -j

/**
 * STEP 2: Go into dance.html and make sure that it links to both the css and js files
 */

//done -j

/**
 * STEP 3: Add static file middleware. 
 */

app.use(express.static(__dirname + "/public"));

/**
 * STEP 4: Create a route for "/dance" that serves the dance.html file
 */

app.get("/dance", (req, res) => {
    res.sendFile(__dirname + "/public/dance.html");
});

app.listen(3000, () => {
    console.log(`Server is running`);
});
