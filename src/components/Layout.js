'use strict';

var React = require('react');
var Weather = require('./Weather.js');
var DateTime = require('./DateTime.js');
var Todo = require('./Todo.js');
var Carousel = require('./Carousel.js');

// CSS
require('normalize.css');
require('../styles/main.css');
require('../styles/weather-icons.css');

var Layout = React.createClass({
  render: function() {
    return (
      <div className="main">
        <Weather/>
        <DateTime/>
        <Todo/>
        <Carousel/>
      </div>
    );
  }
});

module.exports = Layout;
