const database = require('../database/database')

module.exports = {

    checkoutPayment(quantity, id_producto) {
        return new Promise((resolve, reject) => {
            database.query('update producto set stock = stock - ? where id_producto = ?;',
                [quantity, id_producto],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                })
        })
    }
}