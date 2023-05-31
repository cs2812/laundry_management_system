const mongoose = require("mongoose")

const appSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,require:true},
    status:{type:String, enum: ['pending', 'confirmed'], default: 'pending' },
    date:{type:String,require:true},
    service:{type:String,require:true},
    topwears:{type:String},
    bottomwears:{type:String},
    woolenCloths:{type:String},
    contact:{type:String},
    others:{type:String},
    discription:{type:String},
})

const LaundryRequest = mongoose.model("app",appSchema)

module.exports = LaundryRequest;