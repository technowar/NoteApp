'use strict';

var Index = require('../routes');
var Entry = require('../routes/Entry');

module.exports = function(App) {
  App.get('/', Index);

  App.get('/entry', Entry.GetEntries);
  App.post('/entry', Entry.PostEntry);
};