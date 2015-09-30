'use strict';
var React = require('react');
var Skycons = require('react-skycons');

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
          summary: result.currently.summary
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
        <p class="current-icon">
          <Skycons color="white" icon={iconName(this.state.current.icon)} />
        </p>
        <p class="current-summary">
          {this.state.current.summary} | {this.state.nextWeek.summary}
        </p>
      </div>
    );
  }
});

module.exports = Weather;
