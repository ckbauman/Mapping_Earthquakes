// Add console.log to check to see if our code is working.
console.log("working");


// // 13.5.2 and 13.5.3
// // Create the map object with a center and zoom level.
// // L.map object, mapid from id in index.html, coordinates with zoom level 2
// // Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);


// // 13.5.2 Add GeoJSON data.
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

// // 13.5.2 Grabbing our GeoJSON data. using pointToLayer
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


// // 13.5.2 Grabbing our GeoJSON data. using onEachFeature
// L.geoJson(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2><hr><h3>Airport Name: " + feature.properties.name + "</h3");
//   }
// }).addTo(map);

// 13.5.5 chaning to light-v10 layer map
// change variable from streets to light
// We create the tile layer that will be the background of our map.
// tileLayer method with API URL for accessToken and OpenStreetMap URL
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 13.5.4 We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 13.5.4 Create a base layer that holds both maps. Both tileLayer maps
// 13.5.5 updating light variable
// Light, Dark keys set the text,  light, dark values are referencing styles variables from tileLayer
let baseMaps = {
  Light: light,
  Dark: dark
};

// 13.5.4 alternative map object without .setView
// 13.5.5 updating streets to light variable
// 13.5.5 updating center of map to Toronto with zoom level 2
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [dark]
})

// 13.5.4 Pass our map layers into our layers control and add the layers control to the map.
// little icon (Layers Control) pops up in top right to show the layers selection
L.control.layers(baseMaps).addTo(map);



// Then we add our 'streets' tile layer to the map.
// streets.addTo(map);

// // 13.5.3 and 13.5.4
// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/ckbauman/Mapping_Earthquakes/main/majorAirports.json";

// 13.5.5
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/ckbauman/Mapping_Earthquakes/main/torontoRoutes.json";




// // 13.5.3 Grabbing our GeoJSON data. WITH popup info
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2><hr><h3>Airport Name: " + feature.properties.name + "</h3");
//   }
// }).addTo(map);
// });

// 13.5.5
// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}


// 13.5.5
// Grabbing our GeoJSON data.
// SKILL DRILL: airline route line changed to light yellow, each route has popup with airline code and destination
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h3>Airline: "+ feature.properties.airline + "</h3><hr><h3>Destination: " 
    + feature.properties.dst + "</h3>");
  }
}).addTo(map);
});



// // 13.5.3 and 13.5.4 Grabbing our GeoJSON data. WITHOUT popup info
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data).addTo(map);
// });


// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);