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
  '.com': 'text/html'
};

//serve static files
exports.serveAssets = function(res, asset) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  fs.readFile(asset, 'utf-8', function (err,data) {
      //if bad path throw error 404
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      //else
      var mime = contentTypes[path.extname(asset)];
      if (mime) {
        //change content type (reference contentTypes)
        res.setHeader('Content-Type', mime);
      }
      //send 200 (success) if no error
      res.writeHead(200);
      //return data (contents of static file)
      res.end(data);
    });
};

// As you progress, keep thinking about what helper functions you can put here!


