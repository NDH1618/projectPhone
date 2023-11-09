const CategoryModel = require('../models/category');
const userModel = require("../models/user");
const paginate = require("../../common/pagination");
const ProductModel = require("../models/product");
const slug = require("slug");
const fs = require("fs");
const path = require("path");




const index = async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = 6;
    const skip = page * limit - limit;
    const total = await ProductModel.find().countDocuments();
    const totalPage = Math.ceil(total / limit);

    const pages = paginate(page, totalPage)

    const products = await ProductModel.find()
        .populate({
            path: "cat_id"
        })
        .skip(skip)
        .sort({_id: -1})
        .limit(limit);
    
    const next = page + 1;
    const prev = page - 1;
    const hasprev = page > 1? true : false;
    const hasNext = page < totalPage? true : false;   
    res.render("admin/products/product", {
        data: {
            products,
            page,
            totalPage,
            pages,
            next,
            prev,
            hasprev,
            hasNext,
        }
    })
};


//     const products = await ProductModel.find()
//         .populate({
//             path: "cat_id"
//         })
//     res.render("admin/products/product", {data: {products} })

// }

const create = async (req, res) => {
    const categories = await CategoryModel.find();
    res.render("admin/products/add_product", {categories})
};

const store = (req, res) => {
    const {file, body} = req;
    // console.log(file);
    // console.log(body);

    const product = {
        description: body.description,
        price: body.price,
        cat_id: body.cat_id,
        status: body.status,
        featured: body.featured=="on",
        promotion: body.promotion,
        warranty: body.warranty,
        accessories: body.accessories,
        is_stock: body.is_stock,
        name: body.name,
        slug: slug(body.name),
    }
    console.log(product)

    if(file){
        const thumbnail= "products/"+file.originalname;
        fs.renameSync(file.path, path.resolve("src/public/images", thumbnail));
        product["thumbnail"]=thumbnail;
        new ProductModel(product).save();
        res.redirect("/admin/product")
    } else{
        console.log("them anh khong thanh cong !")
    }
    
};

const edit = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const productId = await ProductModel.findById(id);
    const categories = await CategoryModel.find();
    console.log(productId);
    res.render("admin/products/edit_product", {productId, categories})
};


const updateProduct = async (req, res) => {
    const id = req.params.id;
    const {file, body} = req;
    console.log(file);
    console.log(body.description);
    console.log(id);

    const product = {
        description: body.description,
        price: body.price,
        cat_id: body.cat_id,
        status: body.status,
        featured: body.featured=="on",
        promotion: body.promotion,
        warranty: body.warranty,
        accessories: body.accessories,
        is_stock: body.is_stock,
        name: body.name,
        slug: slug(body.name),
    };
    

    if(file){
        const thumbnail= "products/"+file.originalname;
        fs.renameSync(file.path, path.resolve("src/public/images", thumbnail));
        product["thumbnail"]=thumbnail;
        
    } 
    console.log(product);
   
    await ProductModel.updateOne({_id:id}, {$set: product});
    res.redirect("/admin/product");
     console.log("da update san pham thanh cong")

    
}



const del = async (req, res) => {
    const id = req.params.id;
    await ProductModel.deleteOne({_id: id});
    res.redirect("/admin/product");
}


module.exports = {
    index,
    create,
    store,
    updateProduct,
    edit,
    del,
};
