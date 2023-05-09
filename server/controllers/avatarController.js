const {Avatar} = require('../models/models')
const {User} = require('../models/models')

class avatarController{
    async addAvatar(req,res){
        const {path, userId} = req.body
        const newAvatar = await Avatar.create({path:path,userId:userId})
        return res.status(200).send(newAvatar)
    }
    async getAvatar(req,res){
        const {userId} = req.body
        const user = await User.findOne({
            where:{
                id: userId,
            },
            include: 'avatar'
        })
        return res.status(200).json(user)
    }
}


module.exports = new avatarController()