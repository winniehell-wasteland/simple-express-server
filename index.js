module.exports = function(app) {
  'use strict';

  var packpath = require('packpath');
  var path = require('path');

  var port = parseInt(process.env.PORT);

  if (port) {
    console.log('Running at port ' + port + ' ...');
    app.listen(port);
  } else {
    var config = require(path.join(packpath.parent(), 'package.json'));
    var hostName = config.name + '.node.js';
    port = 62000;
    console.log('Running at http://' + hostName + ':' + port + ' ...');
    app.listen(port, hostName);
  }

};
