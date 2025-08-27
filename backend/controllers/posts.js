import posts from '../mockdata.js';

function getPosts(req, res) {
  res.json(posts);
}

function createPost(req, res) {
  const { title, content, author, date } = req.body;

  if (!title || !content || !author || !date) {
    return res.status(400).json({
      message: 'Missing required fields: date, title, content or author',
    });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    author,
    date,
  };

  posts.push(newPost);

  res.status(201).json(newPost);
}

export { getPosts, createPost };
