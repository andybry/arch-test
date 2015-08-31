import HtmlTemplate from '../HtmlTemplate';

export default class extends React.Component {
  getLayoutTemplate() {
    return (context) => React.renderToStaticMarkup(<HtmlTemplate {...context} />);
  }
  getTitle() {
    return 'The title of the application'
  }
  render() {
    return <p>Minimal Arch application</p>;
  }
}
