var React = require('react');

module.exports = React.createClass({
  render: function () {
    var Icon = this.props.icon;
    return (
      <div id="weather">
        <p id="weather-icon">
          <Icon />
        </p>
        <p id="weather-text">
          {this.props.caption}
        </p>
      </div>
    );
  }
});
