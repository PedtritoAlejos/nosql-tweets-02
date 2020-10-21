const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true

        },
        surnames:{
            type:String,
            required:true,
            trim:true
        },
        birthdate:{
            type:Date,
            default: new Date(),

        },
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            trim:true

        },
        avatar:{
            type:String,
            trim:true,
            default:''
        },
        banner:{
            type:String,
            trim:true,
            default:''
        },
        biography:{
            type:String,
            trim:true,
            default:''
        },
        location:{
            type:String,
            trim:true,
            default:''
        },
        website:{
            type:String,
            trim:true,
            default:''
        }
  
    },
    {timestamps:true}
);

userSchema.methods = {
    authenticate: function(passwordPlaintText){
        return this.password === passwordPlaintText;
    }
}

module.exports = mongoose.model("User",userSchema);