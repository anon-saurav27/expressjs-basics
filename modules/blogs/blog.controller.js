const blogModel =require("./blog.model");

const  create=(payload)=>{
    return blogModel.create(payload);
};

module.exports={create};