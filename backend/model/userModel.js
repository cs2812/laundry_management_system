const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{type: String, require:true},
    email:{type:String, require:true,unique:true},
    avatar:{type:String},
    mobile:{type:String,require:true},
    password:{type:String,require:true}
})

const userCollection = mongoose.model("user",userSchema)

module.exports = userCollection;