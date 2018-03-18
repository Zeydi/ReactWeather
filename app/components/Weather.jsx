const React = require('react');
const WeatherForm = require('./WeatherForm');
const WeatherMessage = require('./WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const Images = require('./Images');

const Weather = React.createClass({
  getInitialState: function() {
    return {
        isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({
      isLoading: true,
      location: undefined,
      temp: undefined
    })
    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function(err) {
      that.setState({isLoading: false});
      alert(err);

    });
  },
  componentDidMount() {
    let location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
        window.location.hash = '#/'
    }

  },
  componentWillReceiveProps(newProps) {
    let location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'
    }

  },
  render: function() {
    var {isLoading, temp, location} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }
    return (
			<div>
			<div className="row">
      <div className="columns medium-6 large-6 small-centered">
          <h1 className="text-center page-title">Get Weather</h1>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
          
    </div>
		</div>
		<Images temp={temp} style={{width: "100%"}}/>
		</div>
    );
  }
});

module.exports = Weather;
