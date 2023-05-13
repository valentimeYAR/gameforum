const {Avatar} = require('../models/models')
const {User} = require('../models/models')

class avatarController{
    async addAvatar(req,res){
        const {path, userId} = req.body
        const newAvatar = await Avatar.create({path:path,userId:userId})
        return res.status(200).send(newAvatar)
    }
    async updateAvatar(req,res){
        const {path} = req.body
        const userId = req.params.id
        const newAvatar = await Avatar.findOne({where:{id:userId}})
        newAvatar.path = path
        await newAvatar.save()
        return res.status(200).json(newAvatar)
    }
}


module.exports = new avatarController()