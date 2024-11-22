'use strict';


/**
 * Criar um novo cliente
 *
 * body Clients_body 
 * returns inline_response_201_2
 **/
exports.createClient = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "addresses" : {
    "city" : "city",
    "street" : "street",
    "postalCode" : "postalCode",
    "state" : "state"
  },
  "name" : "name",
  "cpf" : "cpf",
  "phones" : [ "phones", "phones" ],
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletar um cliente
 *
 * id Integer ID do cliente
 * returns inline_response_200_3
 **/
exports.deleteClient = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Cliente e vendas associadas deletados com sucesso."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Detalhar um cliente
 *
 * id Integer ID do cliente
 * month Integer Filtrar vendas por mês (optional)
 * year Integer Filtrar vendas por ano (optional)
 * returns inline_response_200_2
 **/
exports.getClientById = function(id,month,year) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "addresses" : {
    "city" : "city",
    "street" : "street",
    "postalCode" : "postalCode",
    "state" : "state"
  },
  "name" : "name",
  "cpf" : "cpf",
  "phones" : [ "phones", "phones" ],
  "id" : 0,
  "sales" : [ {
    "saledProducts" : [ {
      "unitPrice" : 5.637377,
      "quantity" : 5,
      "productId" : 1
    }, {
      "unitPrice" : 5.637377,
      "quantity" : 5,
      "productId" : 1
    } ],
    "totalPrice" : 6.0274563,
    "saleDate" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "saledProducts" : [ {
      "unitPrice" : 5.637377,
      "quantity" : 5,
      "productId" : 1
    }, {
      "unitPrice" : 5.637377,
      "quantity" : 5,
      "productId" : 1
    } ],
    "totalPrice" : 6.0274563,
    "saleDate" : "2000-01-23T04:56:07.000+00:00"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar todos os clientes
 *
 * returns List
 **/
exports.getClients = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "cpf" : "cpf",
  "id" : 0
}, {
  "name" : "name",
  "cpf" : "cpf",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar um cliente
 *
 * body Clients_id_body 
 * id Integer ID do cliente
 * returns inline_response_201_2
 **/
exports.updateClient = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "addresses" : {
    "city" : "city",
    "street" : "street",
    "postalCode" : "postalCode",
    "state" : "state"
  },
  "name" : "name",
  "cpf" : "cpf",
  "phones" : [ "phones", "phones" ],
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

