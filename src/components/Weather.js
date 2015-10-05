'use strict';
var React = require('react');
var Skycons = require('react-skycons');
// var Slick = require('react-slick');


// Test data
var _url = 'https://api.forecast.io/forecast/dad61bd04b666d91452a138f1192f553/47.83,-122.20';

function iconName(n) {
  return (n || '').toUpperCase().replace(/-/g, '_');
}

var Weather = React.createClass({
  getInitialState: function() {
    return {
      icon: null,
      currentCaption: 'loading...',
      forecastUrl: _url,
      current: {},
      nextHour: {},
      nextDay: {},
      nextWeek: {}
    };
  },
  componentDidMount: function () {
    $.getJSON(this.state.forecastUrl + '?callback=?', function(result) {
      this.setState({
        current: {
          icon: result.currently.icon,
          summary: result.currently.summary,
          temperature: Math.round(result.currently.temperature)
        },
        nextHour: {
          icon: result.minutely.icon,
          summary: result.minutely.summary
        },
        nextDay: {
          icon: result.hourly.icon,
          summary: result.hourly.summary
        },
        nextWeek: {
          icon: result.daily.icon,
          summary: result.daily.summary
        }
      });
    }.bind(this));
  },
  render: function () {
    return (
      <div id="weather">
        <p className="current-icon">
          <Skycons color="white" icon={iconName(this.state.current.icon)} />
        </p>
        <p className="textfill current-summary">Now: {this.state.current.summary}</p>
        <p className="textfill current-temp">{this.state.current.temperature}°</p>
        <p className="textfill today">{this.state.current.temperature}°</p>
      </div>
    );
  }
});

module.exports = Weather;
