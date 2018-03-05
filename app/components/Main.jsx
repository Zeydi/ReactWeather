var React = require('react');
const Nav = require('Nav');
const rains = require('../image/rains.png');


var Main = (props) => {
    return(
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-6 small-centered">
            {props.children}
          </div>
        </div>
        <img  src={rains} alt="life is better" />
      </div>
    );
  }
module.exports = Main;
