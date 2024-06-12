const mongoose = require("mongoose")
const schema = mongoose.Schema
(
    {
        "pharmacyname":{type:String,require:true},
        "pharmacyid":{type:String,require:true},
        "palce":{type:String,require:true},
        "pincode":{type:String,require:true}
    }
)
let pharmacymodel = mongoose.model("pharmacy",schema)
module.exports={pharmacymodel}