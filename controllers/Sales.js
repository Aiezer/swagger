'use strict';

var utils = require('../utils/writer.js');
var Sales = require('../service/SalesService');

module.exports.createSale = function createSale (req, res, next, body) {
  Sales.createSale(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
