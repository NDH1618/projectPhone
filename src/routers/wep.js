
const express = require('express');
const routes = express.Router();

const TestController = require('../apps/controllers/test');
const authController = require('../apps/controllers/auth');
const adminController = require('../apps/controllers/admin');
const productController = require('../apps/controllers/product');
const UserController = require('../apps/controllers/User');
const siteController = require('../apps/controllers/site');

const authMiddleware = require("../apps/middleware/auth");
const UloadMiddleware = require("../apps/middleware/upload");


routes.get('/welcome', (req, res) => {
    res.send("welcome Express")
});

routes.get("/", siteController.home)
routes.get("/category-:slug.:id", siteController.category)
routes.get("/product/:title/:id", siteController.product);
routes.post("/product/:title/:id", siteController.comment);
routes.get("/search", siteController.search)
routes.get("/cart", siteController.cart)
routes.get("/success", siteController.success)


// routers test
routes.get("/testForm", TestController.testForm)
routes.get("/test1", TestController.test1)
routes.get("/test2", TestController.test2)
routes.get("/test3", TestController.test3)
routes.get("/test4", TestController.test4)
routes.get("/test5", TestController.test5)
routes.get("/test6", TestController.test6)
routes.get("/test7", TestController.test7)
routes.get("/test8", TestController.test8)
routes.get("/test9", TestController.test9)
routes.get("/test10", TestController.test10)
routes.post("/test11", TestController.test11)
routes.get("/test12", TestController.test12)
routes.get("/test13", TestController.test13)
routes.post("/testForm", TestController.actionForm)



// routers admin
routes.get('/admin', (req, res) => {
    res.send("/admin")
});
routes.get('/admin/login', authMiddleware.checklogin, authController.Getlogin);
routes.post('/admin/login',authMiddleware.checklogin, authController.Postlogin);
routes.get('/admin/logout', authController.logout);




routes.get('/admin/dashboard',authMiddleware.checkadmin, adminController.index)

routes.get('/admin/category', adminController.category);
routes.get('/admin/add_category', adminController.add_category);
routes.get('/admin/edit_category', adminController.edit_category);

routes.get('/admin/product',authMiddleware.checkadmin, productController.index)
routes.get('/admin/product/create',authMiddleware.checkadmin, productController.create)

routes.post('/admin/product/store',authMiddleware.checkadmin, UloadMiddleware.single("thumbnail"), productController.store);
routes.post('/admin/product/update/:id',authMiddleware.checkadmin, UloadMiddleware.single("thumbnail"), productController.updateProduct);

routes.get('/admin/product/edit/:id',authMiddleware.checkadmin, productController.edit)
routes.get('/admin/product/delete/:id',authMiddleware.checkadmin, productController.del)


routes.get('/admin/user', UserController.user)
routes.get('/admin/add_user', UserController.add_user)
routes.get('/edit_user', UserController.edit_user)



module.exports = routes;
