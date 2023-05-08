const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

// User
router.post('/user/', userController.registerUser)
router.get('/user', userController.getUser)
router.post('/login', userController.loginUser)
router.get('/user-info/', userController.getUserInfo)

module.exports = router