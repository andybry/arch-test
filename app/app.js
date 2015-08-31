import Arch from 'arch';
import BaseRoute from './routes/BaseRoute';

export default Arch.application.create({
  getInitialState() {
    return {};
  },
  routes() {
    const page = Arch.routes.page;
    const define = Arch.routes.define;
    return define(
      page('*', BaseRoute)
    );
  },
  start(appState) {}
});
