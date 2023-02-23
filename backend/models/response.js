const mongoose = require("mongoose");


const responseSchema = mongoose.Schema(
  {
    title:{type:String,
      required:true
    },

    responseContent: {type:String},
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    
    email:{
      type:String,
      required:true
    },
    survey:{
      type:Array
    }
    ,
    formId:{type:String},
    questionId:{
      type:String
    }
  },
  { timestamps: true },
  { typeKey: "$type" }
);

module.exports = mongoose.model("Response", responseSchema);