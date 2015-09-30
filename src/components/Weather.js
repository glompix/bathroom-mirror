'use strict';
var React = require('react');
var WeatherState = require('./WeatherState');
var WeatherIcons = require('./WeatherIcons');

var Weather = React.createClass({
  render: function() {
    return <WeatherState icon={WeatherIcons.Sun} caption="shit from service." />;
  }
});

module.exports = Weather;
