'use strict';
var React = require('react');

var Weather = React.createClass({
  render: function() {
    return (
      <div id="weather">
        <SunShower/>
      </div>
    );
  }
});

var SunShower = React.createClass({
  render: function() {
    return (
      <div className="icon sun-shower">
        <div className="cloud"></div>
        <div className="sun">
          <div className="rays"></div>
        </div>
        <div className="rain"></div>
      </div>
    );
  }
});

module.exports = Weather;
