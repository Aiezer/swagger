'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.login = function login (req, res, next, body) {
  Auth.login(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signup = function signup (req, res, next, body) {
  Auth.signup(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
