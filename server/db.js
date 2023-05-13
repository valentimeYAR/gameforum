const {Sequelize} = require('sequelize')

module.exports = new Sequelize('forum','postgres', '',{
    dialect: "postgres",
    host: 'localhost',
    port: '5432',
})
