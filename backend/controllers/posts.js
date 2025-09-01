import posts from '../mockdata.js';

function getPosts(req, res) {
  res.json(posts);
}

function createPost(req, res) {
  const { title, content, author } = req.body;
  const lastId = 3;

  if (!title || !content || !author) {
    return res.status(400).json({
      message: 'Missing required fields: date, title, content or author',
    });
  }

  const newPost = {
    id: lastId + 1,
    title,
    content,
    author,
    date: new Date(),
  };

  posts.unshift(newPost);

  res.status(201).json(newPost);
}

function deletePost(req, res) {
  const { id } = req.params;
  const postId = Number(id);

  if (isNaN(postId) || postId <= 0) {
    return res.status(400).json({
      message: 'Invalid post ID',
    });
  }

  const postIndex = posts.findIndex((post) => post.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({
      message: `Post with ID ${postId} not found`,
    });
  }
  const deletedPost = posts.splice(postIndex, 1)[0];

  res.status(200).json({
    message: `Post with ID ${postId} deleted successfully`,
    deletedPost,
  });
}

export { getPosts, createPost, deletePost };
