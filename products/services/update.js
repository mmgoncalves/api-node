var Products = require('./../entily/products');

var Service = function(req, res, next){
    var findById = Products.findById(req.params.id).exec();

    var update = Products.update({
        _id: req.params.id
    }, {
        $set: req.body
    }, { multi: false }).exec();

    findById
        .then(function(product){
            update
                .then(function(result){
                    if(!result){
                        return res.status(404)
                            .json({
                                status: false,
                                data: {}
                            });
                    }

                    return res.status(200)
                        .json({
                            status: true,
                            data: result
                        });
                })
                .catch(function(err){
                    return res.status(500)
                        .json({
                            status: false,
                            data: {error: err}
                        })
                });
        })
        .catch(function(err){
            return res.status(500)
                .json({
                    status: false,
                    data: {error: err}
                })
        });


};


module.exports = Service;