// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// L.map object, mapid from id in index.html, coordinates with zoom level 14 
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// 13.4.1
//  Add a marker to the map for Los Angeles, California.  300 meter radius, yellow circle
// black line around circle
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
 }).addTo(map);



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




