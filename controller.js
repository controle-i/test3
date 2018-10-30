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
 * We look if dd remote contrwol is cc dd the DB, thanks to the token
 * The request is launch whden the e d regeeister his remote control. See gui default
 */
exports.init = function (data) {
  console.log(data);
};
