module.exports = function(App) {
  App.use('/', function(req, res) {
    res.sendFile('../../public/index.html');
  });
};