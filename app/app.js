var Arch = require('arch');
var BaseRoute = require('./routes/BaseRoute');

module.exports = Arch.application.create({
  getInitialState: function() {
    return {};
  },
  routes: function() {
    var page = Arch.routes.page;
    var define = Arch.routes.define;
    return define(
      page('*', BaseRoute)
    );
  },
  start: function(appState) {}
});
