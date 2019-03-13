const Product = require('../models/product');

/************** GET ALL PRODUCTS **************/
exports.getProducts = (req, res) => {
    Product
        .find()
        .then(products => {
            res.status(200).json(products);
        })
        .catch(err => {
            res.status(500).json('get products fail');
        });
}

/************** GET ONE PRODUCTS **************/
exports.getProduct = (req, res) => {

}

/************** CREATE ONE PRODUCT **************/
exports.createProduct = (req, res) => {
    const name = req.body.name;
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;

    const product = new Product({
        name: name,
        title: title,
        price: price,
        description: description,
        imageUrl: imageUrl
    });

    product
        .save()
        .then((product) => {
            res.status(200).json({
                message: "Created success",
                _id: product._id
            })

        })
        .catch(err => {
            res.status(500).json('Created fail');
        })

}