const mongoose=require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},  
})

module.exports = mongoose.model('User', UserSchema); // User is the name of the model and UserSchema is the schema of the model