const {User} = require('../models/models')
const jwt = require('jsonwebtoken')

class UserController{
    async registerUser(req, res){
        const {login, password, email} = req.body
        const user = await User.create({
            login: login, password: password, email: email
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
        if(findUser && findUser.password === password){
            const token = jwt.sign({login: login}, 'secret')
            return res.json({token})
        }else{
            return res.status(400).json({message: 'Password or login is incorrect'})
        }
    }
    async getUserInfo(req, res){
        const authHeader = req.headers.authorization
        const token = authHeader && authHeader.split(" ")[1]
        jwt.verify(token, 'secret', (async (err, user) => {
            const userInfo = await User.findOne({where:{login: user.login}})
            return res.status(200).json(userInfo)
        }))
    }
}

module.exports = new UserController()