const userModel = require("../users/user.model");
const blogModel =require("./blog.model");
const {generateSlug}=require("../../utils/textParser")

const  create=(payload)=>{
    payload.slug=generateSlug(payload.title);
    return blogModel.create(payload);
};

const list=()=>{
    return blogModel.aggregate(
        [
            {
              '$lookup': {
                'from': 'users', 
                'localField': 'author', 
                'foreignField': '_id', 
                'as': 'author'
              }
            }, {
              '$unwind': {
                'path': '$author', 
                'preserveNullAndEmptyArrays': false
              }
            }, {
              '$project': {
                'author': '$author.name', 
                'title': 1, 
                'slug': 1, 
                'content': 1, 
                'status': 1, 
                'duration': 1, 
                'createdAt': 1, 
                'updatedAt': 1, 
                '_id': 0
              }
            }
          ]
    );
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