var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
var fs = require('fs');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var site = archive.paths.siteAssets+req.url;
  if(req.method === 'GET') {
    if (req.url === '/'){
      helpers.serveAssets(res, site + 'index.html');
    } else {
      helpers.serveAssets(res, req.url);
    }
  }
};
