var App = React.createClass({
  getInitialState: function() {
    return {
      mapToken: 'pk.eyJ1IjoidHdlbGNoIiwiYSI6Il9pX3dtb3cifQ.YcYnsO0X2p3x0HpHPFfleg',
      mapView: {
        container: 'map',
        style: 'mapbox://styles/twelch/cifr49xm4000086m15ev17on0',
        center: [-122.396, 37.781],
        zoom: 15
      }
    };
  },

  render: function() {
    return (
      <div className="App">
        <GLMap view={this.state.mapView} token={this.state.mapToken}/>
      </div>
    )
  }
});

var GLMap = React.createClass({
  propTypes: {
    view: React.PropTypes.object,
    token: React.PropTypes.string
  },

  render: function() {
    var mapStyle = {
      position: 'absolute',
      top:0,
      bottom:0,
      width:'100%'
    };

    return (
      <div>
        <div id='map' style={mapStyle}></div>
      </div>
    )
  },

  componentDidMount: function() {
    var el = ReactDOM.findDOMNode();
    var self = this;
    mapboxgl.accessToken = this.props.token;
    this.map = new mapboxgl.Map(this.props.view);
    this.map.on('click', function (e) {
        self.map.featuresAt(e.point, {layer: 'lighting', radius: 5}, function (err, features) {
            if (err) throw err;      
            if (features.length > 0) {
              console.log(features);
              var tooltip = new mapboxgl.Popup()
              .setLngLat(e.lngLat)
              .setHTML('<h3>Lightpost!</h3>')
              .addTo(self.map);
            }
        });
    });
    this.map.on('mousemove', function (e) {
      self.map.featuresAt(e.point, {layer: 'lighting', radius: 10}, function (err, features) {
        if (err) throw err;
        self.map.getCanvas().style.cursor = features.length ? "pointer" : "";
    });
});
  },

  componentWillUnmount: function() {
    this.map.remove();
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode());
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('content')
);

