const express = require('express');
const adminController = require('../controllers/admin');

const Router = express.Router();

/************** GET ALL PRODUCTS **************/
Router.get('/products',adminController.getProducts);

/************** GET ONE PRODUCTS **************/
Router.get('/products',adminController.getProduct);

/************** CREATE ONE PRODUCTS **************/
Router.post('/product',adminController.createProduct);



module.exports = Router;