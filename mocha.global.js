import app from './server/';

after(function(done) {
  app.angularFullstack.on('close', () => done());
  app.angularFullstack.close();
});
