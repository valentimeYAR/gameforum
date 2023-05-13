const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const avatarController = require('../controllers/avatarController')

// User
router.post('/user/', userController.registerUser)
router.get('/user', userController.getUser)
router.post('/login', userController.loginUser)
router.get('/get-auth/', userController.getUserInfo)

// Avatar
router.post('/avatar/', avatarController.addAvatar)
router.put('/avatar/:id', avatarController.updateAvatar)

module.exports = router