const database = require('../database/database')

module.exports = {

    getAllProducts() {
        return new Promise((resolve, reject) => {
            database.query('select * from producto;',
                [],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        });
    },

    getProductById(idProduct) {
        return new Promise((resolve, reject) => {
            database.query('select * from producto where id_producto = ?;',
                [idProduct],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        });
    },

    getCategories() {
        return new Promise((resolve, reject) => {
            database.query('select distinct categoria from producto;',
                [],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        });
    },

    getProductsByCategory(category) {
        return new Promise((resolve, reject) => {
            database.query('select * from producto where categoria = ?;',
                [category],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        });
    }
}