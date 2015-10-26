import 'mapbox-gl/dist/mapbox-gl.css';
//import 'babel-core/polyfill';
import mapboxgl from 'mapbox-gl';
//shimmingWorksButNotOptimal require("script!mapbox-gl/dist/mapbox-gl.js");

var token = location.hash.replace('#', '');
if (!token) {
    token = prompt('Mapbox Access Token');
}
mapboxgl.accessToken = token;

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
    center: [-74.50, 40], // starting position
    zoom: 9 // starting zoom
});