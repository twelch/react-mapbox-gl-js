# react-mapgbox-gl-js
Simple React component for a Mapbox GLJS map (aka mapbox-gl-js)

A Mapbox GL map creates and manages its own DOM elements outside of React's virtual DOM.  Not a problem, we can still encapsulate a map into a React component and keep things separate. This example borrows heavily from a [blog post](http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/) written by Nicolas Hery demonstrating a technique for incorporating D3 into a React app.

## Setup
* Install webpack (npm install -g webpack or equivalent)
* npm install
* webpack (creates dist/bundle.js using webpack.config.js)
* npm start
* Browse to localhost:8080/#your-public-mapbox-token

