var fs = require('fs');
var data = require('../us-attorneys-general/data/us-attorneys-general.json');
var values = require('object.values');

if (!Object.values) {
  values.shim();
}

fs.truncate('us-attorneys-general/data/us-attorneys-general.sql', 0, function() {
  for (var i = 0; i < data.length; i++) {
    var query = 'INSERT INTO `us-attorneys-general` (`' + Object.keys(data[i]).join('`, `') + '`) VALUES ("' + Object.values(data[i]).join('", "') + '");\n';
    fs.appendFile('us-attorneys-general/data/us-attorneys-general.sql', query.replace(/""/g, 'null'));
  }
});