const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json())


// ROUTES
const productRoutes = require('./routes/product.routes')
const paymentRoutes = require('./routes/payment.routes')
app.use(productRoutes)
app.use(paymentRoutes)

app.listen(2626, () => console.log('Server online'))