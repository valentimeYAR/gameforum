const {Sequelize} = require('sequelize')

module.exports = new Sequelize('forum','postgres', 'suckduck228',{
    dialect: "postgres",
    host: 'localhost',
    port: '5432',
})