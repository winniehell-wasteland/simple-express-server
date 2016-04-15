#!/usr/bin/env node

var express = require('express')
var server = require('./index.js')

var app = express()

app.get('/hen', function (req, res, next) {
  res.send('egg')
})

server(app)
