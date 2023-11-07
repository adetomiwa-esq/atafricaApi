const stock = require('../models/stocks')

exports.createStock = async (req, res, next) => {
    try {
        const Stock = await stock.create(req.body)
        res.status(200).json({
            success: true,
            Stock
        })
    } catch (error){
        res.status(400).json({error: error.message})
    }
    
}


exports.getStocks = async(req, res, next) => {
    try {
        const Stock = await stock.find()
        res.status(200).json({
            success: true,
            Stock
        })
    } catch (error){
        res.status(400).json({error: error.message})
    }
}