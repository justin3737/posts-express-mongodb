const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, '未填寫姓名']
		},
		content: {
			type: String,
			required: [true, '未填寫貼文內容']
		},
		tags: [
			{
				type: String,
				require: [true, '貼文標籤 Tags 未填寫']
			}
		],
		image: {
			type: String,
			default: '',
		},
		likes: {
			type: Number,
			default: 0,
		},
		comments: {
			type: Number,
			default: 0,
		},
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
		collection:'posts' //這邊自訂名稱
	}
)

const Post = mongoose.model('Post', postSchema);

module.exports = Post;