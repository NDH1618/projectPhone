const ProductModel = require('../models/product');
const commentModel = require('../models/comment');
const moment = require('moment');

const home = async (req, res) => {
    const featuredProduct = await ProductModel
        .find({
            featured: true,
            is_stock: true,
        })
        .populate({path: "cat_id"})
        .limit(6)
        .sort({_id: -1})
    
    const newProduct = await ProductModel
        .find({is_stock: true})
        .populate({path: "cat_id"})
        .limit(6)
        .sort({_id: -1})
    
    console.log(featuredProduct, newProduct)
    res.render("site/index", {featuredProduct, newProduct})
};



const category = async (req, res) => {
    /*
    1: bay gio lay du lieu theo danh muc nao, dau tien la phai lay duoc id cua danh muc,
    2: sau do minh se loc san pham theo danh muc,
    3: tiep theo minh se truyen product sang ben view de hien thi san pham, title, vao tong so sp 
    */ 
   const id = req.params.id;
   const title = req.params.slug;

   const product = await ProductModel
    .find({cat_id: id})
    .sort({_id: -1})
    .limit(7)
   
   const ProductName = await ProductModel.find({cat_id: id})
   const total = ProductName.length;

    res.render("site/category", {product, title, total})
};



const product = async (req, res) => {
    /*
    1: o day se hien thi chi tiet san pham, dau tien la phai lay id san pham,
    2: sau do loc san pham theo id da lay duoc,
    */ 
    const id = req.params.id;
    const {body} = req;
    console.log(id);

    const product = await ProductModel.find({_id: id});
    const comment = await commentModel.find({prd_id: id}).sort({_id: -1});
    console.log(product);

    res.render("site/product", {product, comment, moment});
};


const comment = async (req, res) => {
    const id = req.params.id;
    const {body} = req;
    const newcomment = {
                email: body.mail,
                full_name: body.name,
                body: body.body,
                prd_id: id,
            }
    console.log(newcomment);
    new commentModel(newcomment).save();

    // const product = await ProductModel.find({_id: id});
    // const comment = await commentModel.find({prd_id: id});
    // console.log(product);

    res.redirect(req.path);
}



const search = async (req, res) => {
    const keyword = req.query.keyword || "";
    const filter = {};
    console.log(keyword)
    if(keyword){
        filter.$text = {
            $search: keyword,
        }
    }
    const product = await ProductModel.find(filter).limit(5);
    // console.log(product);
    res.render("site/search", {product})
};



const cart = (req, res) => {
    res.render("site/cart")
};



const success = (req, res) => {
    res.render("site/success")
};


module.exports = {
    home,
    category,
    product,
    search,
    cart,
    success,
    comment,

};
