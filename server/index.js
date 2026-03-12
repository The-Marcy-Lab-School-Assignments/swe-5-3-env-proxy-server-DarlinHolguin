//////////////////////////
// Imports
//////////////////////////

const path = require('path');
const express = require('express');
require('dotenv').config();

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToFrontend = path.join(__dirname, '../frontend');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////
const gifController = async (req, res) => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/trending?limit=3&rating=g&api_key=${process.env.APIKEY}`)
        const data = await response.json();
        res.json(data)
    } catch (error) {
        res.status(503).json(error)
    }
};
app.get('/api/gifs', gifController)

const serveStatic = express.static(pathToFrontend);

app.use(serveStatic);

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 