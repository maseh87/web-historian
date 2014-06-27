var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

//reference content types (non-HTML)
var contentTypes = {
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.map': 'application/javascript'
};

//serve static files
exports.serveAssets = function(res, url) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  var mime = contentTypes[path.extname(url)];
  console.log('mime: ' + url);
  if (mime) {
    //change content type (reference contentTypes)
    res.setHeader('Content-Type', mime);
    url = archive.paths.siteAssets + url;
    servePage(res, url);
  } else {
    archive.isUrlInList(url, function(found){
      if(!found) {
        url = archive.paths.siteAssets + '/loading.html';
        servePage(res, url);
      }
    });
  }
};

// As you progress, keep thinking about what helper functions you can put here!


exports.servePage = servePage = function(res, url){
  console.log('servePage function ' + url);
  fs.readFile(url, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    //send 200 (success) if no error
    res.writeHead(200);
    //return data (contents of static file
    // res.write(data);
    res.end(data);
  });
};
