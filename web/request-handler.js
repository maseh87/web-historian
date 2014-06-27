var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
var fs = require('fs');

// require more modules/folders here!
exports.handleRequest = function (req, res) {
  var site = archive.paths.siteAssets + req.url;
  if(req.method === 'GET') {
    if (req.url === '/'){
      console.log("inside GET "+req.url)
      helpers.servePage(res, site + 'index.html');
    } else {
      // console.log(req.url + ' the browsers get requests');
      helpers.serveAssets(res, req.url);
    }
  }
  if(req.method === 'POST') {
    req.on('data', function(data) {
      var url = data.toString().slice(4);
      helpers.serveAssets(res, url);
    });
  }
};
