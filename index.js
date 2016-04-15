module.exports = function (app) {
  'use strict'

  var packpath = require('packpath')
  var path = require('path')
  var rc = require('rc')

  var defaultConfig = {}
  if (process.env.NODE_ENV !== 'production') {
    defaultConfig.hostName = 'localhost'
    defaultConfig.port = 3000
  }

  var packageJson = require(path.join(packpath.parent(), 'package.json'))
  if (!packageJson.name) {
    throw new Error('package.json contains no package name!')
  }

  var packageConfig = rc(packageJson.name, defaultConfig)

  if (!packageConfig.port) {
    throw new Error('Missing port in config!')
  }

  packageConfig.port = parseInt(packageConfig.port)
  if (!packageConfig.port) {
    throw new Error('Port needs to be a number!')
  }

  if (!packageConfig.hostName) {
    throw new Error('Missing host name in config!')
  }

  console.log('Running ' + packageJson.name + ' at http://' + packageConfig.hostName + ':' + packageConfig.port + ' ...')
  app.listen(packageConfig.port, packageConfig.hostName)
}
