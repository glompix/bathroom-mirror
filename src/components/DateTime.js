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
        <div id="time">
          <p className="hour-minute">{t.format('h:mm')}</p>
          <p className="second">{t.format('ss')}</p>
          <p className="ampm">{t.format('A')}</p>
        </div>
        <div id="date">
          <p>{t.format('dddd, MMMM Do YYYY')}</p>
        </div>
      </div>
    );
  }
});

module.exports = DateTime;
