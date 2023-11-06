const mongoose = require('mongoose')

function connectToDataBase(){
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MongoDB database connected with host: ${con.connection.host}`)
    })
}

module.exports = connectToDataBase