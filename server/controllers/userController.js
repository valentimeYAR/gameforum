const {User} = require('../models/models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {locals} = require("express/lib/application");

class UserController{
    async registerUser(req, res){
        const {login, password, email} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            login: login, password: hashedPassword, email: email
        })
        return res.status(200).json(user)
    }
    async getUser(req, res){
        const id = req.body.id
        const user = await User.findByPk(id)
        return res.status(200).json(user)
    }
    async loginUser(req, res){
        const {login, password} = req.body
        const findUser = await User.findOne({where:{login: login}})
        const comparePassword = await bcrypt.compare(password, findUser.password)
        if(findUser && comparePassword){
            const token = jwt.sign({login: login}, 'secret')
            return res.json({token, message: 'Authentication successful'})
        }else{
            return res.status(400).json({message: 'Password or login is incorrect'})
        }
    }
    async getUserInfo(req, res){
        const authHeader = req.headers.authorization
        const token = authHeader && authHeader.split(" ")[1]
        const decoded  = jwt.verify(token, 'secret', (async (err, decoded) => {
            return decoded
        }))
        const userInfo = await decoded.then(async res=> {
            let user = await User.findOne({where:{login: res.login}})
            return user
        })
        return res.status(200).json(userInfo)
    }
}

module.exports = new UserController()