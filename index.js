var mjml = require('mjml');
var fs = require('fs');

var path = __dirname + '/src/general.mjml';

fs.watch(path, function(event, filename) {
  console.log(event, filename);
  if(event == "change") {
    fs.writeFile(__dirname + '/dist/general.html',mjml.mjml2html(fs.readFileSync(path,'utf8')));
  }
});