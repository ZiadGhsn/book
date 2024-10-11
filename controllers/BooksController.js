const bookSchema = require("../models/booksModel");
const { getAllModels, getModelById, createModel, updateModelById, deleteModelById } = require('../services/queries');

exports.createBook = async (req,res,next) => {
    const inputs = req.body;
    const bookToBeCreated =await createModel(bookSchema, inputs);
    return res.json(bookToBeCreated);
}
exports.getAllBooks = async (req,res,next) => {
    const allBooks = await getAllModels(bookSchema);
    return res.status(200).json({
        message: "books retrieved Successfully",
        success: true,
        data: allBooks,
      });
}
exports.getBookById = async (req,res,next) => {
    const {id}= req.params;
    const book = await getModelById(bookSchema, id);
    if(!book){
        return res.status(404).json({
          message:"book Not Found",
          success:false,
        })
    };
    return res.status(200).json({
        message:"Book Retrieved Successfully",
        success: true,
        data: book,
    });
}
exports.updateBookById = async(req,res,next) => {
    const {id} = req.params;
    const inputs = req.body;
    const updatedBook = await updateModelById(bookSchema, id, inputs,{new:true});
    if(!updateBook){
            return res.status(404).json({
              message:"Book Not Found",
              success:false,
            })
    }
    return res.status(200).json({
        message: "Book updated Successfully",
        success: true,
        data: updatedBook,
    });
}
exports.deleteBookById = async (req,res,next) => {
    const {id} = req.params;
    const deletedBook = await deleteModelById(bookSchema, id);
    if(!deletedBook){
            return res.status(404).json({
              message:"Book Not Found",
              success:false,
            })
    }
    return res.status(200).json({
        message: "Book deleted Successfully",
        success: true,
        data: deletedBook,
    });
}