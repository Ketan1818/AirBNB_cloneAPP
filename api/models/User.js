const { default: mongoose } = require("mongoose");
const {Schema} = mongoose;


const UserSchema = new mongoose.Schema({
    name:String,
    email:{type:String, unique:true},
    password: String,
    confirmpassword:String,
    number:String,
    address:String,
    city:String,
    state:String,
    type:String
})
const UserModel =mongoose.model("User", UserSchema);

module.exports = UserModel;