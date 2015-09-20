'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');
require('../images/weather-icons.css');


var icons = require('html!../images/weather-icons.html');
icons = "fart";
document.getElementById('weather-icons').innerHtml = icons;

var icon = document.getElementById('svg-weather-sun');
icon = icon ? icon.innerHtml : 'ICON NOT FOUND';

var SrcApp = React.createClass({
  render: function() {
    var date = new Date();
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <h1>
            {date}
          </h1>
          <div class="fill">
            {icon}
          </div>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = SrcApp;
