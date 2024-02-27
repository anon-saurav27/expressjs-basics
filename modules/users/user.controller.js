const userModel = require("./user.model");
const { mail } = require("../../services/nodemailer");
const { hashPassword, comparePassword } = require("../../utils/bcrypt");
const { generateToken, generateRandomToken } = require("../../utils/token");
//CRUD
//create

const create = (payload) => {
  return userModel.create(payload);
};

//Read part 1

const list = () => {
  return userModel.find();
};

//read part 2

const getById = (_id) => {
  return userModel.findOne({ _id });
};

//update

const updateById = (_id, payload) => {
  return userModel.updateOne({ _id }, payload);
};

//delete
const removeById = (_id) => {
  return userModel.deleteOne({ _id });
};

//Register
const register = async (payload) => {
  payload.password = hashPassword(payload.password);
  const user = await userModel.create(payload);
  if (!user) throw new Error("Registration Failed");

  // email send
  return mail(
    user.email,
    "Registration Completed",
    "you are successfully registered, thank you for creating account - saurav giri"
  );
};

const login = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) throw new Error("Email or password is missing");
  const user = await userModel.findOne({ email, isActive: true });
  if (!user) throw new Error("user doesn't exist");
  const isValidPw = comparePassword(password, user.password);
  if (!isValidPw) throw new Error("Email or password invalid");
  const tokenData = { name: user.name, email: user.email };
  return generateToken(tokenData);
};

const generateFPToken = async (payload) => {
  const { email } = payload;

  if (!email) throw new Error("Email doesn't exist");
  //user exists?
  const user = await userModel.findOne({ email, isActive: true });
  if (!user) throw new Error("User doesn't exist");
  //fp token utils??
  const token = generateRandomToken();
  //store generated token in user model token
  const updateUser = await userModel.updateOne({ email }, { token });
  if (!updateUser) throw new Error("Something went wrong!");
  // send token in user email
  await mail(email, "Forget psw token", `your token is ${token}`);
  return "forget password successfully changed";
};

const verifyFPToken = async (payload) => {
  const { email, token, newPassword } = payload;
  if (!email || !token || !newPassword) throw new Error("Something is missing");
  //user exist?
  const user = await userModel.findOne({ email, isActive: true });
  if (!user) throw new Error("User doesn't exist");
  // compare two token
  const isValidToken = token === user.token;
  if (!isValidToken) throw new Error("TOken mismatched");
  //user update with new password
  const updateUser = await userModel.updateOne(
    { email },
    { password: hashPassword(newPassword), token: "" }
  );
  if (!updateUser) throw new Error("process failed. try again later");
  //return success message
  return "password reset successfully";
};

const changePassword = async (payload) => {
  const { email, oldPassword, newPassword } = payload;
  if (!email || !newPassword || !oldPassword)
    throw new Error("something went wrong");
  const user = await userModel.findOne({ email, isActive: true });
  if (!user) throw new Error("user not found");
  const isValidOldPw = comparePassword(oldPassword, user.password);
  if (!isValidOldPw) throw new Error("Password didn't match");
  const updateUser = await userModel.updateOne(
    { email },
    { password: hashPassword(newPassword) }
  );
  if (!updateUser) throw new Error("Something went wrong");
  return "password changed successfully.";
};

const resetPassword = async (payload) => {
  const { email, newPassword } = payload;
  if (!email || !newPassword) throw new Error("something went wrong");
  const user = await userModel.findOne({ email, isActive: true });
  if (!user) throw new Error("user not found");
  const updateUser = await userModel.updateOne(
    { email },
    { password: hashPassword(newPassword) }
  );
  if (!updateUser) throw new Error("try again later");
  return "password reset successfully";
};

const blockUser = async (payload) => {
  const { email } = payload;
  const user = await userModel.findOne({ email });
  if (!user) throw new Error("User not found");
  const status = { isActive: !user?.isActive };
  const updateUser = await userModel.updateOne({ email }, status);
  if (!updateUser) throw new Error("Try again later");
  return `User ${status?.isActive ? "unblocked" : "blocked"}successfully`;
};

const getProfile = (_id) => {
  return userModel.findOne({ _id, isActive: true }).select("-password");
};

const updateProfile = (_id, payload) => {
const {email, password, role, ...rest}=payload;
return userModel.updateOne({_id}, rest);
};

module.exports = {
  create,
  list,
  getById,
  updateById,
  removeById,
  register,
  login,
  generateFPToken,
  verifyFPToken,
  changePassword,
  resetPassword,
  blockUser,
  getProfile,
  updateProfile,
};
