const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;