const { Schema, model } = require("mongoose");
const {ObjectId}=Schema.Types;

const blogSchema = new Schema(
  {
    author:{type: ObjectId, required:true, },
    title: { type: String, required: true },
    slug: {type:String,ref:"User", required: true, unique:true},
    status: {
      type:String,
      enum:["draft","published"],default:"draft", required:true,
    },
    content:{ type: String, required: true },
    // pictureUrl:
    // updatedAt: { type: Date, default: Date.now },
    pictureUrl: {type:String},
    duration:{type:Number, min: 1, default:1}
    
  },
  { timestamps: true }
);

module.exports = new model("Blog", blogSchema);
