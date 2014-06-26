var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
var fs = require('fs');


// require more modules/folders here!


exports.handleRequest = function (req, res) {
  if(req.method === 'GET') {
    if (req.url === '/'){
      helpers.serveAssets(res, '/public/index.html');
    } else {
      helpers.serveAssets(res, '/public/' + req.url);
    }
  }
};

