const Stocks = require('../models/stocks')
const dotenv = require('dotenv')

const connectToDataBase = require('../config/database')

const stocksData = require('./stocksData')

dotenv.config({path: 'src/config/config.env'})

connectToDataBase();

const seedStocks = async () => {
    try{
        await Stocks.deleteMany()
        await Stocks.insertMany(stocksData)
        console.log('all stocks are inserted')

        process.exit()
    }catch(error){
        console.log(error.message)
        process.exit()
    }
}

seedStocks()