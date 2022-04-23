const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
  path: './config.env'
});

function init(){
  // 本地連線
  mongoose.connect('mongodb://localhost:27017/todos1').then(() => {console.log('資料庫連線成功')})

  // const DB = process.env.DATABASE.replace(
  //   '<password>',
  //   process.env.DATABASE_PASSWORD
  // );
  // mongoose.connect(DB)
  //   .then(() => {console.log('資料庫連線成功')})
  //   .catch(err => {console.log('資料庫連線失敗', err)});
}

module.exports = init