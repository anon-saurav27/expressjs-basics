const {Schema, model}=require("mongoose");


const blogSchema= new Schema(
    {
    aurthor:String,
    username:{type:String, required:true},
    pages:Number,
},
{timestamps: true}
);

module.exports = new model("Blogs", blogSchema);