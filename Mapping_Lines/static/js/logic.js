// Add console.log to check to see if our code is working.
console.log("working");


// 13.4.3
// Create the map object with a center and zoom level.
// L.map object, mapid from id in index.html, coordinates with zoom level 4 
let map = L.map('mapid').setView([30.19750817342862, -97.66617051272559], 5);

// Coordinates for each point to be used in the polyline. 
// SFO, AUS, YYZ, JFK
let line = [
    [37.6213, -122.3790],
    [30.19750817342862, -97.66617051272559],
    [43.67776413597428, -79.62496990622145],
    [40.64124595082492, -73.7782356621477]
  ];

// Create a polyline using the line coordinates and make the line
L.polyline(line, {
    color: "blue",
    opacity: 0.5,
    weight: 4,
    dashArray: '5,10'
  }).addTo(map);





// 13.4.3 cont.
// We create the tile layer that will be the background of our map.
// tileLayer method with API URL for accessToken and OpenStreetMap URL
// mapbox map style is light map using light-v10
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
NOTE