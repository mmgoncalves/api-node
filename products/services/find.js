var xml2js = require('xml2js').parseString;
var Service = function(req, res){
    var xml = '<note><script id="tinyhippos-injected"/><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Dont forget me this weekend!</body></note>';

    xml2js(xml, function(err, result){
        res.status(200)
            .send(result);
    });
};

module.exports = Service;