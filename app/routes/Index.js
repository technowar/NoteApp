'use strict';

module.exports = function(request, response) {
  response.sendFile('../../public/index.html');
};