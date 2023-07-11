const express = require("express");
const router = express.Router();

// import
const { createComment } = require("../controllers/commentcontroller");
const { createPost, getAllPost } = require("../controllers/postcontroller");
const { likePost, unlikePost } = require("../controllers/likecontroller");

// map
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

module.exports = router;
