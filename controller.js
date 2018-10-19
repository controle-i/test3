/*jslint node: true */
'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  fs = require('fs'),
  request = require('request'),
  config = require(path.resolve('./config/config')),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * We look if tdscsddssddshe remote control is registered in the DB, thanks to the token
 * The request is launch when the remote control register his remote control. See gui default
 */
exports.init = function (data) {
  console.log(data);
};