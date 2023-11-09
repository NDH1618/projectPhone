/*
1: bay gio minh se lam chuc nang comment, dau tien la phai tao moit schemal de cau truc du lieu,
.require module mongosee da connec vao o database, tao doi tuong, sao do export no ra de su dung, 
2: sau khi da co CommentModel roi thi ta se goi no ra ben site, sau do ra se gan router ben form 
de nhan du lieu , bang cach gui di 1 action den router post du lieu,
3: ben controller site ta tao comment de su ly req gui len khi thuc thi action, nhan du lieu 
tu form thong qua bodyParser, su dung cu phap gui du lieu len mongosse, sau do cho hien thi ra view 
*/ 

const mongoose = require("../../common/database")();
const commentschemal = new mongoose.Schema({
    email: {
        type: "string",
        required: true,
    },
    full_name: {
        type: "string",
        required: true,
    },
    body: {
        type: "string",
        required: true,
    },
    prd_id: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
}, {
    timestamps: true,
});
const commentModel = mongoose.model("comment", commentschemal, "comments");
module.exports = commentModel;

