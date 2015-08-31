var Arch = require('arch');
var React = require('react');

var Route = React.createClass({
  getLayoutTemplate: function() {
    return function(context) {
      return context.body;
    }
  },
  getTitle: function() {
    return 'The title of the application'
  },
  render: function() {
    return <p>Minimal Arch application</p>;
  }
});

var Application = Arch.application.create({
  getInitialState: function() {
    return {};
  },
  routes: function() {
    var page = Arch.routes.page;
    var define = Arch.routes.define;
    return define(
      page('*', Route)
    );
  },
  start: function(appState) {}
});

module.exports = Application;
if(typeof window !== 'undefined') {
  window.Application = Application;
}
