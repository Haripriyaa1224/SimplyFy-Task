const userModel = require('../Models/user')


const register = async (req, res)=>{
    try{

        const {id, name} = req.body;
        
        if (!name || typeof name !== 'string' || name.trim() === '') {
            throw new Error('Name is required and must be a non-empty string.');
          }

        if (!id || typeof id !== 'string' || id.length < 6) {
            throw new Error('Enter correct ID.');
          }

          const newUser = new userModel({id: id, name: name});
          const newlyInsertedUser = await newUser.save();
          res.json({
            success:true, 
            message:"User registration successful", 
            id: newlyInsertedUser._id
          })
    }catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
}

const userController = {
    register
}

module.exports = userController;