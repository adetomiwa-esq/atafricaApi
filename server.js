const app = require('./src/app')
const connectToDataBase = require('./src/config/database')

const dotenv = require('dotenv')

dotenv.config({path: 'src/config/config.env'})

connectToDataBase()

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`)
})