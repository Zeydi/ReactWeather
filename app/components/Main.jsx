var React = require('react');
const Nav = require('Nav');


var Main = (props) => {
    return(
      <div>
        <Nav/>
        <div >
          <div >
            {props.children}
          </div>
        </div>  
      </div>
    );
  }
module.exports = Main;
