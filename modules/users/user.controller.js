const userModel = require("./user.model");
const {mail}=require("../../services/nodemailer");
const {hashPassword, comparePassword}=require("../../utils/bcrypt")
//CRUD

//create

const create=(payload)=>{
    return userModel.create(payload);
};

//Read part 1

const list=()=>{
    return userModel.find();
};

//read part 2

const getById=(_id)=>{
    return userModel.findOne({_id});
};


//update

const updateById=(_id, payload)=>{
    return userModel.updateOne({_id}, payload);
};

//delete
const removeById=(_id)=>{
    return userModel.deleteOne({_id});
};

//Register
 const register=async(payload)=>{
    payload.password=hashPassword(payload.password);
    const user=await userModel.create(payload);
    if (!user) throw new Error("Registration Failed");

    // email send
    return mail(
        user.email,
        "Registration Completed",
        "you are successfully registered, thank you"
    );
 };


module.exports={create, list, getById, updateById,removeById, register}
