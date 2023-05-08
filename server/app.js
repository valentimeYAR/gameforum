const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const {json} = require("express")
const router = require('./router/index')
const models = require('./models/models')

const PORT = 3000
const app = express()

app.use(json())
app.use(cors())
app.use('/api', router)

const server = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server listening on port 3000'))
    } catch (e) {
        console.log(e)
    }
}

server()