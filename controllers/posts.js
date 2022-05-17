const successHandler = require('../services/successHandler');
const errorHandler = require('../services/errorHandler');
const Post = require("../models/postsModel");

const posts = {
  async getPosts(req, res){
    const allPosts = await Post.find();
    successHandler(res, allPosts);
  },
  async createPosts(req, res){
    try {
      const { body } = req;

      if (body.content !== undefined) {
        const newPost = await Post.create({
          name: body.name,
          content: body.content,
          tags: body.tags,
          type: body.type
        })
        successHandler(res, newPost);
      } else {
        errorHandler(res)
      }
    } catch(error) {
      errorHandler(res, error)
    }
  },
  async deletePosts(req, res){
    const posts = await Post.deleteMany({});
    successHandler(res, posts);
  },
  async deleteOnePosts(req, res) {
    try {
      const id = req.params.id;
      await Post.findByIdAndDelete(id);
      const posts = await Post.find();
      successHandler(res, posts);
    } catch(error) {
      errorHandler(res, error)
    }
  },
  async updatePosts(req, res) {
    try {
      const id = req.params.id;
      const { body } = req;
      if ( body.content !== '') {
        await Post.findByIdAndUpdate(id, body);
        const posts = await Post.find();
        successHandler(res, posts);
      } else {
        errorHandler(res)
      }
    } catch(error) {
      errorHandler(res, error)
    }
  }
}

module.exports = posts;

