const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const relationSchema = mongoose.Schema(
    {
        userId:{
            type:ObjectId,
            ref:"User",
            required:true

        },
        userRelationId:{
            type:ObjectId,
            ref:"User",
            required:true
        }
    }
);


module.exports = mongoose.model("Relation",relationSchema);
