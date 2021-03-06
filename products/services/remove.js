var Products = require('./../entily/products');

var Service = function(req, res, netx){
    var findById = Products.findById(req.params.id).exec();
    var remove = Products.remove({
        _id: req.params.id
    });

    findById
        .then(function (product) {
            if(!product){
                return res.status(404)
                    .json({
                        status: false,
                        data: { _id: req.params._id}
                    });
            }

            remove
                .exec()
                .then(function () {
                    return res.status(200)
                        .json({
                            status: true,
                            data: product
                        });
                })
                .catch(function (err) {
                    return res.status(500)
                        .json({
                            status: false,
                            data: {error: err}
                        });
                });

        })
        .catch(function (err) {
            return res.status(500)
                .json({
                    status: false,
                    data: {error: err}
                });
        })
};

module.exports = Service;