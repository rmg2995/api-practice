// const http = require('http');
const express = require('express');
const app = express();
const path = require("path");
const fetch = require('node-fetch') 

app.listen(3000, () => console.log('listen'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/weather/:latlon', async(request, response) => {
    console.log(request.params)
    const latlon = request.params.latlon.split(',');
    console.log(latlon)
    const lat = latlon[0];
    const lon = latlon[1];
    console.log(lat, lon);
    const api_url = `https://api.weather.gov/points/${lat},${lon}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
})
