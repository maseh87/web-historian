var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
var fs = require('fs');


// require more modules/folders here!

// var router = {
//   'GET': getCallback,
//   'POST': postCallback
// }
var asset = '';

exports.handleRequest = function (req, res) {
  if(req.method === 'GET') {
    console.log('yo');
    asset = archive.isUrlInList(req, res);
    helpers.serveAssets(res, asset);
  }
  // res.end(asset);
};



// res.end(path.join(__dirname, '../web/public/index.html'));
