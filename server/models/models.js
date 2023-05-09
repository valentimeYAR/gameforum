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
    path: {type: DataTypes.STRING, allowNull: false},
    userId: {type: DataTypes.INTEGER}
})

User.hasOne(Avatar, {foreignKey: 'userId'})
Avatar.belongsTo(User, {foreignKey: 'userId'})

module.exports = {
    User, Avatar
}