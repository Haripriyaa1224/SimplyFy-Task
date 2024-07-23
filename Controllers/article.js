const articleModel = require('../Models/article');

const create = async (req, res)=>{
    try{

        const {title, body, authorId} = req.body;

        console.log(req.body);

          const newArticle = new articleModel({title, body, author: authorId});
          const newlyInsertedArticle = await newArticle.save();
          res.json({
            success:true, 
            message:"Article created successfully", 
            id: newlyInsertedArticle._id,
            title: newlyInsertedArticle.title
          })
    }catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
}

const get = async (req, res) => {
    try {
        const articles = await articleModel.find().populate('author', 'name');
        res.json(articles);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const articleController = {
    create,
    get
}

module.exports = articleController;