'use strict';
var React = require('react');

var Carousel = React.createClass({
  render: function() {
    return (
      <div id="carousel text-center">
        <img className="inverted" src="http://imgs.xkcd.com/comics/tech_loops.png" />
      </div>
    );
  }
});

module.exports = Carousel;
