# react-mapgbox-gl
Simple React component for a Mapbox GL (aka mapbox-gl-js) map

A Mapbox GL map creates and manages its own DOM elements outside of React's virtual DOM.  Not a problem, we can still encapsulate a map into a React component and keep things separate. This example borrows heavily from a [blog post](http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/) written by Nicolas Hery demonstrating a technique for incorporating D3 into a React app.

## Setup
Add your public mapbox token to the 'mapToken' property in App.js

