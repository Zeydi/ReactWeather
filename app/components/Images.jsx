const React = require('react');

const Images = (props) => {
  var {temp} = props
  if (!temp) {
    return (
      <div className='rows' >
        <img   className='className="columns medium-3 large-3 small-centered' src={require('../assets/sunny.png')} width="100%"  />
        <img  className='className="columns medium-3 large-3 small-centered' src={require('../assets/rains.png')} width="100%"  />
        <img  className='className="columns medium-3 large-3 small-centered' src={require('../assets/both.png')} width="100%"  />
        <img  className='className="columns medium-3 large-3 small-centered' src={require('../assets/cloudy.png')} width="100%"  />
      </div>
    );
  } else if (temp < 10 ){
    return (
      <img  className="float-center" calssName="centered" src={require('../assets/cloudy.png')} width="300"  />
    );
  } else if (temp < 20) {
    return (
      <img  className="float-center" src={require('../assets/both.png')} width="300"  />
    );
  } else {
    return (
      <img className="float-center" src={require('../assets/sunny.png')} width="300"  />

    );
  }

  }


module.exports = Images;
