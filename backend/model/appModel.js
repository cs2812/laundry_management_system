const mongoose = require("mongoose")

const appSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,require:true},
    status:{type:String, enum: ['pending', 'confirmed'], default: 'pending' },
    pickupDate:{type:String,require:true},
    serviceType:{type:String,require:true},
    topwears:{type:String},
    bottomwears:{type:String},
    woolenCloths:{type:String},
    contactNumber:{type:String},
    others:{type:String},
    discription:{type:String},
})

const LaundryRequest = mongoose.model("app",appSchema)

module.exports = LaundryRequest;