module.exports = React.createClass({
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
