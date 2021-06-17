const express = require('express');
const app = express();
const cors = require('cors');

const vehiclesArr = require('./data/vehicles.json'); // imports vehicles from data directory

app.use(express.json());
app.use(cors());

// endpoints here



const SERVER_PORT = 5050;
app.listen(SERVER_PORT, function() { console.log(`Server rocking on ${SERVER_PORT}`)})