export default class extends React.Component{
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.body}}></body>
      </html>
    );
  }
};
