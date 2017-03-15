var fs = require('fs');
var obj = require('../us-attorneys-general/data/us-attorneys-general.json');
var js2xmlparser = require('js2xmlparser');

var xml = js2xmlparser.parse('us-attorneys-general', { 'councilor': obj });

fs.writeFile('us-attorneys-general/data/us-attorneys-general.xml', xml);