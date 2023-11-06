const express = require('express')

const router = express.Router()

const { createStock, getStocks } = require('../controllers/stockController')

router.route('/create_stock').post(createStock)
router.route('/get_stocks').get(getStocks)

module.exports = router