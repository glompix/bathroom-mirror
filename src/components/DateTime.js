'use strict';
var React = require('react');
var moment = require('moment');

var DateTime = React.createClass({
  getInitialState: function() {
    return { t: moment() };
  },
  componentDidMount: function() {
    this.start();
  },
  start: function() {
    var self = this;
    (function tick() {
      self.setState({ t: moment() });
      requestAnimationFrame(tick);
    }());
  },
  render: function() {
    var t = this.state.t;
    return (
      <div id="datetime">
        <div className="col-1">
          <p>
            <span className="hour-minute">{t.format('h:mm')}</span>
            <span className="second">{t.format('ss')}</span>
            <span className="ampm">{t.format('a')}</span>
          </p>
          <p>
            <span className="weekday">{t.format('dddd')}</span>
            <span className="month-day">{t.format('MMMM Do')}</span>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = DateTime;
