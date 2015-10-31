# react-mapgbox-gl-js
Simple React component for a Mapbox GLJS map (aka mapbox-gl-js)

A Mapbox GL map creates and manages its own DOM elements outside of React's virtual DOM.  Not a problem, we can still encapsulate a map into a React component and keep things separate. This example borrows heavily from a [blog post](http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/) written by Nicolas Hery demonstrating a technique for incorporating D3 into a React app.

## Setup
Checkout the code and cd into the root directory
```
#npm install
```
Edit App.js and enter your own default center location, zoom level, API access key and your own style URL (or someone else's) created using Mapbox Studio.  Now start up the dev server.
```
#npm start
```
Browse to localhost:8080/#your-public-mapbox-token
Note this code is good for development only.  For a more full-featured React app see my [seed project](https://github.com/twelch/react-mapbox-gl-seed)

## Firebase (Optional)
Continue to develop the code as desired.  When ready you can pushing using Firebase's static hosting service.
Signup and create a new app at [firebase.com](http://firebase.com).  Now go to their app hosting page for furthe instruction.  In summary install firebase CLI too, authenticate against your account, initialize project synch, and push your code
```
npm install firebase
firebase init
firebase deploy
```
