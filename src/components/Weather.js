'use strict';
var React = require('react');
var Skycons = require('react-skycons');
var Slick = require('react-slick');
var moment = require('moment');

var slickOpts = {
  dots: false,
  speed: 750,
  infinite: true,
  autoplay: true,
  arrows: false,
  cssEase: 'cubic-bezier(0.050, 0.950, 0.035, 0.795)'
};

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
      nextWeek: {},
      events: []
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
        },
        events: (function() {
          var data = result.daily.data;
          var events = [];
          for (var i = 0; i < data.length; i++) {
            var sunrise = new Date(data[i].sunriseTime * 1000);
            if (sunrise > new Date()) {
              events.push({icon: 'clear-day', time: moment(sunrise)});
            }
            var sunset = new Date(data[i].sunsetTime * 1000);
            if (sunset > new Date()) {
              events.push({icon: 'clear-night', time: moment(sunset)});
            }
          }
          for (i = events.length; i < 2; i++) {
            events.push({icon: 'cloudy', time: moment(0)});
          }
          return (
            <div>
              <Skycons color="white" width="36px" height="36px" autoplay={false} icon={iconName(events[0].icon)}></Skycons>
              {events[0].time.format('h:mm a')}
              <Skycons color="white" width="36px" height="36px" autoplay={false} icon={iconName(events[1].icon)}></Skycons>
              {events[1].time.format('h:mm a')}
            </div>
          );
        })()
      });

      setInterval(function () {

      }, 5000);
    }.bind(this));
  },
  render: function () {
    return (
      <div id="weather">
        <p className="current-icon">
          <Skycons color="white" icon={iconName(this.state.current.icon)} />
        </p>
        <p className="current-temp">{this.state.current.temperature}°</p>
        <Slick className="rolling-stats" autoplaySpeed={5070} {...slickOpts}>
          {this.state.events}
        </Slick>
        <Slick className="rolling-summary" autoplaySpeed={9200} {...slickOpts}>
          <div>Next hour: {this.state.nextHour.summary}</div>
          <div>Next day: {this.state.nextDay.summary}</div>
          <div>Next week: {this.state.nextWeek.summary}</div>
        </Slick>
      </div>
    );
  }
});

module.exports = Weather;
