const userSchema = require("../models/userModel");
const { getAllModels, getModelById, createModel, updateModelById, deleteModelById } = require('../services/queries');

exports.createUser = async(req,res,next) => {
    const inputs = req.body;
    const userToBeCreated =await createModel(userSchema, inputs);
    return res.json(userToBeCreated);
};

exports.getAllUsers = async(req,res,next) => {
    const allUsers = await getAllModels(userSchema);
    return res.status(200).json({
        message: "users retrieved Successfully",
        success: true,
        data: allUsers,
      });
};

exports.getUserById = async(req,res,next) => {
    const {id}=req.params;
    const user = await getModelById(userSchema, id);
    if(!user){
        return res.status(404).json({
          message:"User Not Found",
          success:false,
        })
      }
    return res.json({
        message: "User retrieved successfully",
        success: true,
        data: user,
      });
}
exports.updateUserById = async(req,res,next) => {
    const {id}=req.params;
    const inputs = req.body;
    const updatedUser = await updateModelById(userSchema, id, inputs,{new:true});
    if(!updatedUser) {
        return res.status(404).json({
          message:"User Not Found",
          success:false,
        })
    }
    return res.json({
        message: "User updated successfully",
        success: true,
        data: updatedUser,
      });
}
exports.deleteUserById = async (req,res,next)=>{
    const {id}=req.params;
    const deletedUser = await deleteModelById(userSchema, id);
    if(!deletedUser){
        return res.status(404).json({
          message:"User Not Found",
          success:false,
        })
    }
    return res.json({
        message: "User deleted successfully",
        success: true,
        data: deletedUser,
      });
}