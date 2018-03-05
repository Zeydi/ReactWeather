const React = require('react');
const {Link} = require('react-router');

const About = (props) => {
    return (
      <div>
          <h1 className="text-center">About</h1>
          <p>This is a weather application build on React in the complete React web App Developer course</p>
          <ul>
            <li>
              I used <a href="https://facebook.github.io/react"> React library</a>  in this project
            </li>
            <li>
              I used  <a href="https://openweathermap.org/">openWeatherMap</a> to search for weatherdata by city name
            </li>
            <li>
                This is the <a href="https://github.com/Zeydi/ReactWeather">Github </a> repository for this App.
            </li>
          </ul>
      </div>
    );
};

module.exports = About;
