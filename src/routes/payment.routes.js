const express = require('express')
const router = express.Router()

const paymentModel = require('../models/paymentModel')

router.post('/payment', (req, res) => {
    const products = req.body.products
    //console.log(products)
    try {
        products.forEach(element => {
            paymentModel.checkoutPayment(element.quantity, element.id_producto)
        });
        res.status(200).send('Compra exitosa')
    } catch (error) {
        res.status(500).send('Error al procesar')
    }

})

module.exports = router;