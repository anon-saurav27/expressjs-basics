const userModel = require("./user.model");
//CRUD

//create

const create=(payload)=>{
    return userModel.create(payload);
};


module.exports={create}
