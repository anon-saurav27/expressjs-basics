const {verifyToken}=require("./token");
const userModel=require("../modules/users/user.model");



const checkRole = (sysRole) => {
  return async (req, res, next) => {
    try{
      const token= req.headers.access_token || null;
    
      if(!token)throw new Error("Token missing");
      const {data}=verifyToken(token);

      //check if user is active or not
      const user=await userModel.findOne({
        email:data.email,
        isActive: true,
      });
      
      if(!user)throw new Error("Invalid Token");
      
        // compare role
      const isValidRole= sysRole.some((role)=>user.roles.includes(role));
      if (!isValidRole) throw new Error("permission denied");
      req.currentUser= user?._id;
      next();
    }
    catch(err){
      next(err);
    };
  };
};
//RBAC(role based access control) vs ABAC(attribute) vs pBAC(permission)
module.exports = { checkRole };
