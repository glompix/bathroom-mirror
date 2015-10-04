'use strict';

var Layout = require('./Layout.js');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Routes = (
  <Route handler={Layout}>
    <Route name="/" handler={Layout}/>
  </Route>
);

var content = document.getElementById('content');
Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
