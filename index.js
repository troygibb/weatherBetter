const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on the magical port of http://localhost:${port}/`));