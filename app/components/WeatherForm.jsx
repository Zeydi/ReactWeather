const React = require('react');


const WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;
    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="Search weather by city" ref='location'/>
          <br/>
          <button className="hollow button expanded">Get the weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
