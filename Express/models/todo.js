const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
    task:String,
    completed:{type:Boolean,default:false}
})


module.exports = mongoose.model('Todo',todoSchema)


models/user.js
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username:String,
    password:String
})
module.exports = mongoose.model('User',userSchema)





