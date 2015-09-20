'use strict';

var SrcApp = require('./SrcApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;


require('../images/weather-icons.css');
var icons = require('html!../images/weather-icons.html');
icons = 'fart';

var weatherIcons = document.getElementById('weather-icons');
weatherIcons.innerHtml = icons;


var Routes = (
  <Route handler={SrcApp}>
    <Route name="/" handler={SrcApp}/>
  </Route>
);

var content = document.getElementById('content');
Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
