const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: String,
        //自訂義時間戳記
        createdAt: {
            type: Date,
            default: Date.now,
            select: false //不回傳前端
        }
    },
    // 預設值物件
    {
        versionKey: false,
        //時間戳記
        //timestamps:true,

        //最後不想強制加上s
        //collection:'room' //這邊自訂名稱
    }
)

const Post = mongoose.model('Post', postSchema);

module.exports = Post;