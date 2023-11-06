const express = require('express')

const router = express.Router()

const { createStock } = require('../controllers/stockController')

router.route('/create_stock').post(createStock)

module.exports = router