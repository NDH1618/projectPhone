// var mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/vp_shop_project', {useNewUrlParser: true, useNewUrlParser: true,  useUnifiedTopology: true});
// var db = mongoose.connection;
// //Bắt sự kiện error
// db.on('error', function(err) {
//   if (err){
//     console.log(err)
//     } 
// });
// //Bắt sự kiện open
// db.once('open', function() {
//   console.log("Kết nối thành công !");
// });

// console.log("thu chay tren nay xem the nao")
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/vp_shop_project')
  .then(() => console.log('da ket noi thanh cong toi mongoose!'));







