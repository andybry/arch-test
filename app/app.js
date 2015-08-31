var Arch = require('arch');
var React = require('react');

var HtmlTemplate = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.body}}></body>
      </html>
    );
  }
});

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
