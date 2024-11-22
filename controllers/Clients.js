'use strict';

var utils = require('../utils/writer.js');
var Clients = require('../service/ClientsService');

module.exports.createClient = function createClient (req, res, next, body) {
  Clients.createClient(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteClient = function deleteClient (req, res, next, id) {
  Clients.deleteClient(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getClientById = function getClientById (req, res, next, id, month, year) {
  Clients.getClientById(id, month, year)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getClients = function getClients (req, res, next) {
  Clients.getClients()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateClient = function updateClient (req, res, next, body, id) {
  Clients.updateClient(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
