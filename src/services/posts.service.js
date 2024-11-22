import Post from "../models/post.js";
import fs from "fs";
import path from "path";

const getAllPosts = async () => {
  try {
    return await Post.find();
  } catch (error) {
    throw new Error("Error fetching posts");
  }
};

const getOnePost = async (id) => {
  try {
    return await Post.findById(id);
  } catch (error) {
    throw new Error("Error fetching posts");
  }
};

const createPost = async (data, file) => {
  try {
    const newPost = new Post({
      title: data.title,
      description: data.description,
      image: `/uploads/${file.filename}`,
    });

    await newPost.save();
    return newPost;
  } catch (error) {
    throw new Error("Error creating post");
  }
};

const updatePost = async (id, updatedData) => {
  const post = await Post.findById(id);
  if (!post) {
    throw new Error("Post not found");
  }

  const updatedPost = await Post.findByIdAndUpdate(id, updatedData);

  if (!updatedPost) {
    throw new Error("Post not found");
  }

  return updatedPost;
};

const deletePost = async (id) => {
  try {
    const post = await Post.findById(id);
    if (!post) throw new Error("Post not found");

    await Post.deleteOne({ _id: id });

    fs.unlinkSync(
      path.join(path.resolve(), "uploads", path.basename(post.image))
    );

    return post;
  } catch (error) {
    throw new Error("Error deleting post");
  }
};

export { getAllPosts, getOnePost, createPost, deletePost, updatePost };
