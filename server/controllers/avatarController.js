const {Avatar} = require('../models/models')
const {User} = require('../models/models')

class avatarController{
    async addAvatar(req,res){
        const {path, userId} = req.body
        const newAvatar = await Avatar.create({path:path,userId:userId})
        return res.status(200).send(newAvatar)
    }
}


module.exports = new avatarController()