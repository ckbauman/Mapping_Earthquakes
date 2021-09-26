// Add console.log to check to see if our code is working.
console.log("working");

// 13.6.1 change tile layers to streets and satellite streets layers
// We create the tile layer that will be the background of our map.
// tileLayer method with API URL for accessToken and OpenStreetMap URL
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 13.6.1 We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps. Both tileLayer maps
// referencing styles variables from tileLayer
// 13.6.1 modify to use streets and satelliteStreets layers
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// alternative map object without .setView
// 13.6.1 updating center of map to center of United States, zoom level 3
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// 13.6.1 Pass our map layers into our layers control and add the layers control to the map.
// little icon (Layers Control) pops up in top right to show the layers selection
L.control.layers(baseMaps).addTo(map);


// 13.6.1
// Accessing the Toronto neighborhoods GeoJSON URL.
let earthquake = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";



// 13.6.1
// Retrieve the earthquake GeoJSON data.
d3.json(earthquake).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});
