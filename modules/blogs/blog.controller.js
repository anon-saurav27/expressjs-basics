const userModel = require("../users/user.model");
const blogModel =require("./blog.model");

const  create=(payload)=>{
    return blogModel.create(payload);
};

const list=()=>{
    return blogModel.find();
};

const getById=(_id)=>{
    return blogModel.findOne({_id});
};

const updateById=(_id, payload)=>{
    return blogModel.updateOne({_id}, payload);
};

const removeById=(_id)=>{
    return blogModel.deleteOne({_id}); 
};

module.exports={create, list, getById, updateById,removeById};