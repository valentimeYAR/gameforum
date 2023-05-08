const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    login: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
})


const Avatar = sequelize.define('avatar',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    filename: {type: DataTypes.STRING, allowNull: false},
    mimetype: {type: DataTypes.STRING, allowNull: false},
    path: {type: DataTypes.STRING, allowNull: false},
    userid: {type: DataTypes.INTEGER}
})
Avatar.belongsTo(User, {foreignKey: 'userid'})

module.exports = {
    User, Avatar
}