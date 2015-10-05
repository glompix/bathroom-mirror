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
  componentDidUpdate: function() {
    updateFontSizes();
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
          <div className="textfill hour-minute"><span>{t.format('h:mm')}</span></div>
          <div className="textfill second"><span>{t.format('ss')}</span></div>
          <div className="textfill ampm"><span>{t.format('A')}</span></div>
        </div>
        <div id="date">
          <div className="textfill"><span>{t.format('dddd, MMMM Do YYYY')}</span></div>
        </div>
      </div>
    );
  }
});

module.exports = DateTime;
