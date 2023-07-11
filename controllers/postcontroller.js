const Post = require("../models/postmodel");

exports.createPost = async (request, response) => {
  try {
    const { title, body } = request.body;
    const post = new Post({
      title,
      body,
    });
    const savedPost = await post.save();

    response.status(200).json({
      success: true,
      post: savedPost,
      message: "Post Created",
    });
  } catch (err) {
    console.log(err);
    response.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getAllPost = async (request, response) => {
  try {
    const allPost = await Post.find({}).populate("comment").populate("like");
    if (!allPost)
      return response.status(404).json({
        post: null,
        message: "No Post Found",
      });
    response.status(500).json({
      post: allPost,
      message: "Post Found",
    });
  } catch (err) {
    console.log(err);
    response.status(500).json({
      post: null,
      message: err.message,
    });
  }
};
