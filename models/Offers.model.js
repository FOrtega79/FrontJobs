const { Schema, model } = require("mongoose");

const offerSchema = new Schema(
{
    title:{type:String}, 
    company:{type:String},
    description:{type:String}, 
    redirect_url:{type:String}, 
    location: {type:String},
    salary_min:{type:Number}, 
    salary_max:{type:Number}, 
}
)

const Offers = model("Offers", offerSchema)
module.exports = Offers