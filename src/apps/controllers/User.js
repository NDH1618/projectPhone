const productModel = require("../models/product");
const userModel = require("../models/user");

const user = async (req, res) => {
    
    res.render("admin/users/user")
};
const add_user = (req, res) => {
    res.render("admin/users/add_user")
};
const edit_user = (req, res) => {
    res.render("admin/users/edit_user")
};


module.exports = {
    user,
    add_user,
    edit_user,
};
