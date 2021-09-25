// Add console.log to check to see if our code is working.
console.log("working");


// 13.5.2 and 13.5.3
// Create the map object with a center and zoom level.
// L.map object, mapid from id in index.html, coordinates with zoom level 2
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);


// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data. using pointToLayer
// // pass each GeoJSON feature as feature and latitue and long as latlng
// // bindPopup returns the city
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.city + "</h2>");
//      // .bindPopup("<h2>" + feature.properties.name + "</h2>"<hr>"<h3>" + feature.properties.city + "," + feature.properties.country + "</h3>");
//      // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")

//     }
// }).addTo(map);


// // Grabbing our GeoJSON data. using onEachFeature
// L.geoJson(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2><hr><h3>Airport Name: " + feature.properties.name + "</h3");
//   }
// }).addTo(map);


// We create the tile layer that will be the background of our map.
// tileLayer method with API URL for accessToken and OpenStreetMap URL
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'streets' tile layer to the map.
streets.addTo(map);

// 13.5.3
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/ckbauman/Mapping_Earthquakes/main/majorAirports.json";


// Grabbing our GeoJSON data. with popup info
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2><hr><h3>Airport Name: " + feature.properties.name + "</h3");
  }
}).addTo(map);
});


// // Grabbing our GeoJSON data. without popup info
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data).addTo(map);
// });







// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);
