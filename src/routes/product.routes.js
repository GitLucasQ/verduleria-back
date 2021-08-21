const express = require('express')
const router = express.Router()

const productModel = require('../models/productsModel')

router.get('/getAllProducts', (req, res) => {
    productModel.getAllProducts()
        .then(products => {
            res.status(200).json(products)
        })
        .catch(err => {
            {
                console.log(err)
            }
        })
});

router.get('/getProductById/:idProduct', (req, res) => {
    const idProduct = req.params.idProduct
    productModel.getProductById(idProduct)
        .then(products => {
            res.status(200).json(products)
        })
        .catch(err => {
            {
                console.log(err)
            }
        })
});

router.get('/getCategories', (req, res) => {
    productModel.getCategories()
        .then(categories => {
            res.status(200).json(categories)
        })
        .catch(err => {
            {
                console.log(err)
            }
        })
});

router.get('/getProductByCategory/:category', (req, res) => {
    const category = req.params.category
    productModel.getProductsByCategory(category)
        .then(products => {
            res.status(200).json(products)
        })
        .catch(err => {
            {
                console.log(err)
            }
        })
});

module.exports = router;