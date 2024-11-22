'use strict';


/**
 * Criar uma venda
 *
 * body Sales_body 
 * returns inline_response_201_1
 **/
exports.createSale = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "clientId" : 6,
  "totalPrice" : 1.4658129,
  "id" : 0,
  "saleDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

