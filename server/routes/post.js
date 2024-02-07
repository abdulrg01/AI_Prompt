const router = require("express").Router();
const post = require("../controller/post");
const verifyJwt = require("../middleware/verifyJwt");

router.route("/createNewPost").post(verifyJwt, post.createPost);

router.route("/getAllPost").get(post.getAllPost);

router.route("/updatePosts").patch(verifyJwt, post.updatePosts);

router.route("/deletePost").delete(verifyJwt, post.deletePost);

module.exports = router;
