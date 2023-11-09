const productModel = require("../models/product");
const userModel = require("../models/user");



const index = async (req, res) => {

    // if(!req.session.email || !req.session.password){
    //     res.redirect("/admin/login");
    // }
    // console.log(req.session.email)
    /*
    

    */ 


    const products = (await productModel.find()).length;
    const users = (await userModel.find()).length;
    res.render("admin/dashboard" , {products, users})
};



const category = (req, res) => {
    res.render("admin/categories/category")
};
const add_category = (req, res) => {
    res.render("admin/categories/add_category")
};
const edit_category = (req, res) => {
    res.render("admin/categories/edit_category")
};


module.exports = {
    index,
    category,
    add_category,
    edit_category,
    
};
