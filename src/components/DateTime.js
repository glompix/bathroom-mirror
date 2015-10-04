'use strict';
var React = require('react');
var moment = require('moment');
var lodash = require('lodash');

var updateFontSizes = lodash.throttle(function () {
  $('#datetime p').each(function () {
    var $t = $(this);
    var fontSize = parseInt($t.css('font-size')) || $t.height();
    $t.css('font-size', fontSize);
    var heightDelta = -1;
    while (heightDelta !== 0) {
      var oldHeight = $t.height();
      fontSize = Math.min(fontSize - 1, 1000);
      $t.css('font-size', fontSize);
      var newHeight = $t.height();
      heightDelta = oldHeight - newHeight;
      console.log('DEBUG ' + $t.attr('class'), oldHeight, newHeight, heightDelta, fontSize);
    }
  });
}, 200);

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
