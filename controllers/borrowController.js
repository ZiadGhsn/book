const borrowSchema = require("../models/borrowModel");
const { getAllModels, getModelById, createModel, updateModelById, deleteModelById } = require('../services/queries');
const userSchema = require('../models/userModel');
const bookchema = require("../models/booksModel");
exports.createBorrow = async(req,res,next) => {
    const inputs=req.body;
    const borrowToBeCreated = await createModel(borrowSchema, inputs);
   return res.json(borrowToBeCreated);
}
exports.getAllBorrows = async(req, res, next) => {
    const populatedKeys = [
        { path: 'user', select: 'name' },  // Populate 'name' from user
        { path: 'book', select: 'title' }  // Populate 'title' from book
    ];   
     const borrows = await getAllModels(borrowSchema, populatedKeys);
    if(!borrows){
        return res.status(404).json({ message: "No borrows found." });
    }
    return res.status(200).json({
        message: "borrows retrieved Successfully",
        success: true,
        data: borrows,
      });
}
exports.getBorrowById = async (req,res,next) => {
    const {id}= req.params;
    const populatedKeys = [
        { path: 'user', select: 'name' },  // Populate 'name' from user
        { path: 'book', select: 'title' }  // Populate 'title' from book
    ];
    const borrow = await getModelById(bookSchema, id,populatedKeys);
    if(!borrow){
        return res.status(404).json({
          message:"borrow Not Found",
          success:false,
        })
    };
    return res.status(200).json({
        message:"borrow Retrieved Successfully",
        success: true,
        data: borrow,
    });
}
exports.updateBorrowById=async(req,res,next) =>{
    const {id}=req.params;
    const inputs=req.body;
    const updatedBorrow= await updateModelById(borrowSchema, id, inputs,{new:true});
    if(!updatedBorrow){
        return res.status(404).json({
            message:"Borrow Not Found",
            success:false,
        });
    }
    return res.status(200).json({
        message:"Borrow Updated Successfully",
        success: true,
        data: updatedBorrow,
    });
}
exports.deleteBorrowById=async(req,res,next) =>{
    const {id}=req.params;
    const deletedBorrow=await deleteModelById(borrowSchema, id);
    if(!deletedBorrow){
        return res.status(404).json({
            message:"Borrow Not Found",
            success:false,
        });
    }
    return res.status(200).json({
        message:"Borrow Deleted Successfully",
        success: true,
    });
}