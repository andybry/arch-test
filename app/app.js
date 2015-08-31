var Arch = require('arch');
var React = require('react');
var HtmlTemplate = require('./HtmlTemplate');

var Route = React.createClass({
  getLayoutTemplate: function() {
    return function(context) {
      return React.renderToStaticMarkup(
        <HtmlTemplate {...context} />
      );
    }
  },
  getTitle: function() {
    return 'The title of the application'
  },
  render: function() {
    return <p>Minimal Arch application</p>;
  }
});

module.exports = Arch.application.create({
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
