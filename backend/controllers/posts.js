import posts from '../mockdata.js';
import Post from '../models/Post.js';

function getPosts(req, res) {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error load posts', error: err.message });
    });
}

function getSinglePost(req, res) {
  Post.findById(req.params.id)
    .then((post) => {
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(post);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Error search post', error: err.message });
    });
}

function updatePost(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(post);
    })
    .catch((err) => {
      res.status(400).json({ message: 'Error update', error: err.message });
    });
}

function createPost(req, res) {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({
      message: 'Missing required fields: date, title, content or author',
    });
  }

  const newPost = new Post({
    title,
    content,
    author,
  });

  newPost
    .save()
    .then((savedPost) => {
      res.status(201).json(savedPost);
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: 'Error create post', error: err.message });
    });
}

function deletePost(req, res) {
  Post.findByIdAndDelete(req.params.id)
    .then((post) => {
      if (!post) {
        return res
          .status(404)
          .json({ message: `Post with ID ${req.params.id} not found` });
      }
      res.json({
        message: `Post with ID ${req.params.id} deleted`,
        deletedPost: post,
      });
    })
    .catch((err) => {
      res.status(400).json({ message: 'Wrong ID post', error: err.message });
    });
}

export { getPosts, createPost, deletePost, updatePost, getSinglePost };
