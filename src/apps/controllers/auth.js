const UserModel = require("../models/user");

const Getlogin = (req, res) => {
    res.render("admin/login", {data: {}});
}

const Postlogin = async (req, res) => {
    let error = null;
    const {email, password} = req.body;

    const user = await UserModel.find({email: email, password: password});
    if(email == "" || password == ""){
        error = "thong tin dang nhap khong duoc de trong"
    } else if(user.length > 0){
        req.session.email = email;
        req.session.password = password;
        res.redirect("/admin/dashboard")
    } else {
        error = "thong tin dang nhap khong chinh xac moi nhap lai"
    }
    res.render("admin/login", {data: {error}})
};

// const Postlogin = (req, res) => {
//    let {email, password} = req.body;
//    if(email == "nguyendoanhong@gmail.com" && password == "123456"){
//     res.redirect("/");
//    } else{
//     res.render("admin/login", {data: {error: "ban da nhap sai thong tin"}})
//    }
// }
const logout = (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
          if (err) {
            console.log("dang xuat khong thanh cong")
          } else {
            console.log("dang xuat thanh cong !")
            res.redirect("/admin/login")
          }
        })};
}

module.exports = {
    Getlogin,
    Postlogin,
    logout,
};
 