import {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
  getOnePost,
} from "../services/posts.service.js";

const getAll = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const post = await getOnePost(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const newPost = await createPost(req.body, req.file);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const alteredPost = await updatePost(req.params.id, req.body);
    res.status(200).json(alteredPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const removePost = await deletePost(req.params.id);
    res.status(200).json(removePost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export { getAll, getOne, create, remove, update };
