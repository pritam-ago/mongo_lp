const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    age : Number,
    address : {
        type : String,
        required : true
    },
    phone_no : {
        type : Number,
        required : true
    },
    followers : {
        type : Number,
        default : 0
    },
    following : {
        type : Number,
        default : 0
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;