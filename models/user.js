const mongoose = require ('mongoose')

const UserSchema = mongoose.Schema({
    firstname:String ,
    flastname:String ,
    email:String ,
    password:String ,
    phone:Number ,
    created_at: {
        type :Date,
        default : Date.now
    }

})

module.exports = mongoose.model ("user", UserSchema) 