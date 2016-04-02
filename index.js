module.exports = function (app) {
  'use strict';

  var packpath = require('packpath');
  var path = require('path');

  var packageJson = require(path.join(packpath.parent(), 'package.json'));

  var port, hostName;
  if (process.env.NODE_ENV === 'production') {
    port = parseInt(process.env.PORT);
    if (!port) {
      throw new Error('There is no fallback port in production environment!');
    }

    hostName = process.env.HOSTNAME;
    if (!hostName) {
      throw new Error('There is no fallback host name in production environment!');
    }
  } else {
    port = parseInt(process.env.npm_package_config_port) || parseInt(process.env.PORT) || 3000;
    hostName = process.env.npm_package_config_hostname || process.env.HOSTNAME  || 'localhost';
  }

  console.log('Running ' + packageJson.name + ' at http://' + hostName + ':' + port + ' ...');
  app.listen(port, hostName);
};
