// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// L.map object, mapid from id in index.html, coordinates with zoom level 14 
let map = L.map('mapid').setView([40.7, -94.5], 4);

// 13.4.2

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city. add a popup
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: (city.population-200000)/100000,
        fillColor: 'orange',
        color: 'orange',
        weight: 4
    } )
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});




// We create the tile layer that will be the background of our map.
// tileLayer method with API URL for accessToken and OpenStreetMap URL
// id is mapbox style

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


