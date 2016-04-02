module.exports = function(app) {
  'use strict';

  var packpath = require('packpath');
  var path = require('path');

  var packageJson = require(path.join(packpath.parent(), 'package.json'));

  var port = parseInt(process.env.PORT) || parseInt(packageJson.config.port);

  if (port) {
    console.log('Running ' + packageJson.name + ' at port ' + port + ' ...');
    app.listen(port);
  } else {
    var hostName = packageJson.name + '.node.js';
    port = 62000;
    console.log('Running ' + packageJson.name + ' at http://' + hostName + ':' + port + ' ...');
    app.listen(port, hostName);
  }

};
