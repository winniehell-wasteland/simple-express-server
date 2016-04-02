module.exports = function(app) {
  'use strict';

  var packpath = require('packpath');
  var path = require('path');

  var packageJson = require(path.join(packpath.parent(), 'package.json'));
  var port = parseInt(process.env.PORT) || parseInt(process.env.npm_package_config_port) || 3000;
  var hostName = process.env.HOSTNAME || process.env.npm_package_config_hostname || 'localhost';

  console.log('Running ' + packageJson.name + ' at http://' + hostName + ':' + port + ' ...');
  app.listen(port, hostName);
};
