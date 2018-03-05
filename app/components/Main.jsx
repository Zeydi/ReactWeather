var React = require('react');
const Nav = require('Nav');


var Main = (props) => {
    return(
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-6 small-centered">
            {props.children}
          </div>
        </div>
        <img  src={require('../assets/sunny.png')} width="300"  />
        <img  src={require('../assets/rains.png')} width="300"  />
        <img  src={require('../assets/both.png')} width="300"  />
        <img  src={require('../assets/cloudy.png')} width="300"  />
      </div>
    );
  }
module.exports = Main;
