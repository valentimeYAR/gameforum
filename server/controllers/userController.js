const {User} = require('../models/models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class UserController {
    async registerUser(req, res) {
        try {
            const {login, password, email} = req.body
            const hashedPassword = await bcrypt.hash(password, 10)
            const findUser = await User.findOne({where: {login: login}})
            if (findUser) {
                return res.status(403).json({message: 'Пользователь с таким именем существует!'})
            } else {
                const user = await User.create({login: login, password: hashedPassword, email: email})
                return res.status(200).json(user)
            }
        } catch (e) {
            console.log(e)
        }
    }

    async getUser(req, res) {
        const id = req.body.id
        const user = await User.findByPk(id)
        return res.status(200).json(user)
    }

    async loginUser(req, res) {
        try {
            const {login, password} = req.body
            const findUser = await User.findOne({where: {login: login}})
            if (!findUser) {
                return res.status(400).json({message: 'Неверный пароль или логин!'})
            } else {
                const comparePassword = await bcrypt.compare(password, findUser.password)
                if (findUser && comparePassword) {
                    const token = jwt.sign({login: login}, 'secret')
                    return res.json({token, message: 'Authentication successful'})
                } else {
                    return res.status(400).json({message: 'Неверный пароль или логин!'})
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    async getUserInfo(req, res) {
        try {
            const authHeader = req.headers.authorization
            const token = authHeader && authHeader.split(" ")[1]
            const decoded = jwt.verify(token, 'secret')
            const user = await User.findOne({login: decoded.login, include: 'avatar'})
            return res.status(200).json(user)
        } catch (e) {

        }
    }
}

module.exports = new UserController()