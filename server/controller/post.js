const Post = require("../models/post");
const User = require("../models/user");

const getAllPost = async (req, res) => {
  const posts = await Post.find().lean();

  if (!posts?.length) {
    res.status(400).json({ message: "No Post found" });
  }

  res.json(posts);
};

const createPost = async (req, res) => {
  const { userId, prompt, tag, image, name, email } = req.body;
  console.log(userId);
  if (!prompt || !tag || !name || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findById(userId).exec();

  // Create and store the new user
  const post = await Post.create({
    user: userId,
    prompt,
    tag,
    image,
    email,
    name,
  });

  user.posts.push(post._id);

  await user.save();

  return res.status(201).json({ success: true, post });
};

const updatePosts = async (req, res) => {
  const { id, prompt, tag } = req.body;

  if (!id || !prompt || !tag) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const post = await Post.findById(id).exec();

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  // Update the post in the database
  post.prompt = prompt;
  post.tag = tag;

  const postUpdated = await post.save();

  return res.json({ success: true, postUpdated });
};

const deletePost = async (req, res) => {
  const { id } = req.body;

  const user = await User.findById(req.user).exec();

  if (!id || !user) {
    return res.status(400).json({ message: "Post ID and User Id required" });
  }

  const post = await Post.findById(id).exec();

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  // Find the index of the post in user's posts array
  const userPostIndex = user.posts.findIndex((userPost) =>
    userPost.equals(post._id)
  );

  // If the post is found in user's posts array, remove it
  if (userPostIndex !== -1) {
    user.posts.splice(userPostIndex, 1);
  }

  // Save the user to persist the changes to the posts array
  await user.save();

  // Delete the post from the database
  const result = await post.deleteOne();

  if (result.deletedCount === 1) {
    return res.json({
      message: "Post deleted successfully",
      deletedPost: post,
    });
  } else {
    return res.status(500).json({ message: "Error deleting post" });
  }
};

module.exports = {
  getAllPost,
  createPost,
  updatePosts,
  deletePost,
};
