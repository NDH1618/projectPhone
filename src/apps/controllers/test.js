const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");
const UserModel = require("../models/user");
const commentModel = require("../models/comment");
const fs = require("fs");
const path = require("path");

const testForm = (req, res) => {


    CategoryModel.find({},(err,docs) => {
        console.log(docs)
    })
    
    // CategoryModel.find().then((docs) => {
    //     console.log(docs)
    // })

    // res.send(`
    //     <form method= post >
    //         <input type=text name=email />
    //         <br />
    //         <input type=submit name=sbm value=send />
    //     </form>
    
    // `)
}

const test1 = async (req, res) => {
    const category = await CategoryModel.find()
    const product = await  ProductModel.find()
    console.log(category.length + product.length)
};



const test2 = (req, res) => {

    const category = {
        decription: "Bphone description",
        title: "Bphone tile",
        slug: "Bphone-slug",
    };
    new CategoryModel(category).save();
}



const test3 = (req, res) => {
    ProductModel.find().populate({path: "cat_id"}).exec((err, docs) => {
        console.log(docs)
    })
}

const test4 = async (req, res) => {
    const user = await UserModel.find();
    console.log(user)
};


const test5 = async (req, res) => {
    req.session.haha = "anhchang@gmail.com"
    res.send("da khoi tao session")
   
    
};


const test6 = (req, res) => {
    if(req.session.haha){
        res.send("da khoi tao thanh cong session")
    }
    else{
        res.send("chua co gi ca")
    }
};

const test7 = (req, res) => {
    res.send("day la test7")
};


const test8 = (req, res) => {
    res.send("day la test8")
};

const test9 = (req, res) => {
    /*
        1:tao modul multer,
        2: cau hinh module multer, tao duong dan tuyet doi,
        3: tao thu muc tmp de luu tru file tam thoi,
        4: cau hinh router cho midwareUpload gan no vao, truyen vao ten phan tu can upload,
        sau do se viet cau hinh
        5: tao ra product de co the them san pham vao co so du lieu 
        new ProductModel(product).save();
        6: xu ly qua trinh them anh vao co so du lieu; xu ly thumbnalis.
        7: cai cac modul de co the xu ly anh ;
        8: neu xu ly anh thanh cong thi ok, khong thanh cong thi bao loi;
        9: fs.renameSync(url hien tai, url muon chuyen toi),
        path.resolve("src/public/images",thumbnail);
        10: da di chuyen an tu thu muc tmp den thu muc images, va ta phai them pham tu vao mang tuc la them thumbnail
        vao mang de them vao co so du lieu,
        11: them thanh cong thi chuyen huong ve trang hien thi san pham ;
        12: kiem tra qua trinh them san pham vao;
        13: sau khi them san pham hoan thien chuc nang xoa san pham;

    */ 
    res.send("khoi tao vao chay test9")
}


const test10 = (req, res) => {
    res.send(`
    <h1>day chinh la test10</h1>

    <form method = post action = /test11>
        <input type = text name = email placeholder = nhap vao email />
        <br />
        <input type = submit name = sbn value = gui />
    </form>

    `)
};
const test11 = (req, res) => {
    res.send(`
    <h1>${req.body.email}</h1>
    `)
};
const test12 = async (req, res) => {

    const comment = await commentModel.find().populate({path: "prd_id"});
    console.log(comment)
    
    res.send("<h1>day chinh la test12 </h1>")
};
const test13 = (req, res) => {
    res.send("<h1>day chinh la test13 </h1>")
};









const actionForm = (req, res) => {
    res.send(req.body.email)
}

module.exports = {
    testForm,
    actionForm,
    test1,
    test2,
    test3,
    test4,
    test5,
    test6,
    test7,
    test8,
    test9,
    test10,
    test11,
    test12,
    test13,
};
