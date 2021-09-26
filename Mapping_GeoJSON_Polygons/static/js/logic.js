// Add console.log to check to see if our code is working.
console.log("working");

// 13.5.6 change tile layers to streets and satellite streets layers
// We create the tile layer that will be the background of our map.
// tileLayer method with API URL for accessToken and OpenStreetMap URL
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 13.5.6 We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps. Both tileLayer maps
// referencing styles variables from tileLayer
// 13.5.6 modify to use streets and satelliteStreets layers
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// alternative map object without .setView
// 13.5.6 updating center of map to Toronto with zoom level 2
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]
})

// 13.5.6 Pass our map layers into our layers control and add the layers control to the map.
// little icon (Layers Control) pops up in top right to show the layers selection
L.control.layers(baseMaps).addTo(map);


// 13.5.6
// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/ckbauman/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// skill drill: Create a style for the lines.
let myStyle = {
    color: "blue",
    fillColor: "yellow",
    weight: 1
  };


// 13.5.6
// Grabbing our GeoJSON data
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    // creating a GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h3>Neighborhood: "+ feature.properties.AREA_NAME + "</h3>");
        }
    }).addTo(map);
});