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

const getArticle = async (req, res) => {
    const article = await articleModel.findById(req.params.id);
  res.send(article);
}

const likeArticle = async (req, res) => {
    try {
        const article = await articleModel.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ success: false, message: 'Article not found' });
        }

        article.likes += 1;
        await article.save();
        res.json({ success: true, message: 'Article liked successfully', likes: article.likes });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


const viewArticle = async (req, res) => {
    try {
        const article = await articleModel.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ success: false, message: 'Article not found' });
        }

        article.views += 1;
        await article.save();
        res.json({ success: true, message: 'Article viewed', views: article.views });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


const articleController = {
    create,
    get,
    getArticle,
    likeArticle,
    viewArticle
}

module.exports = articleController;