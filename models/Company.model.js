const { Schema, model } = require("mongoose");

const CompanySchema = new Schema(
{
    count:{type:Number}, 
    canonical_name:{type:String}, 
    average_salary:{type:String}, 
    display_name:{type:String}, 
}
)

const Companies = model("Companies", CompanySchema)
module.exports = Companies