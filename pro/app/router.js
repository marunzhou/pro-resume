
module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/client', app.controller.home.client);
  app.get('/pager', app.controller.home.pager);
  app.get('/formTest', app.controller.user.formTest);
  app.get('/addUser', app.controller.user.addUser);
};
