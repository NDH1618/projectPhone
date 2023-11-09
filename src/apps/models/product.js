const mongoose = require("../../common/database")();
const productSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
    price: {
        type: Number,
        default: 0,
    },
    cat_id: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    status: {
        type: String,
        default: null,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    promotion: {
        type: String,
        default: null,
    },
    warranty: {
        type: String,
        default: null,
    },
    accessories: {
        type: String,
        default: null,
    },
    is_stock: {
        type: Boolean,
        default: true,
    },
    name: {
        type: String,
        required: true,
       
    },
    slug: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

productSchema.index({name: "text", description: "text"})

const ProductModel = mongoose.model("product", productSchema, "products");
module.exports = ProductModel;