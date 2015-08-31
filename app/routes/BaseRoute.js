var HtmlTemplate = require('../HtmlTemplate');

module.exports = React.createClass({
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

