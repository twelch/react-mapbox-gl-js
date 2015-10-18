var App = React.createClass({
  getInitialState: function() {
    return {
      mapToken: 'pk.eyJ1IjoidHdlbGNoIiwiYSI6Il9pX3dtb3cifQ.YcYnsO0X2p3x0HpHPFfleg',
      mapView: {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v8',
        center: [-122.6, 45.5],
        zoom: 9
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
    mapboxgl.accessToken = this.props.token;
    this.map = new mapboxgl.Map(this.props.view);
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

