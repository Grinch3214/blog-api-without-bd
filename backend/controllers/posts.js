import { pool } from '../db.js';

async function getPosts(req, res) {
  try {
    const result = await pool.query(
      'SELECT * FROM posts ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Error loading posts:', err);
    res.status(500).json({ message: 'Error load posts', error: err.message });
  }
}

async function getSinglePost(req, res) {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error searching post:', err);
    res.status(500).json({ message: 'Error search post', error: err.message });
  }
}

async function createPost(req, res) {
  try {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({
        message: 'Missing required fields: title, content or author',
      });
    }

    const result = await pool.query(
      'INSERT INTO posts (title, content, author) VALUES ($1, $2, $3) RETURNING *',
      [title, content, author]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(400).json({ message: 'Error create post', error: err.message });
  }
}

async function updatePost(req, res) {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;

    const fields = [];
    const values = [];
    let paramCount = 1;

    if (title !== undefined) {
      fields.push(`title = $${paramCount}`);
      values.push(title);
      paramCount++;
    }
    if (content !== undefined) {
      fields.push(`content = $${paramCount}`);
      values.push(content);
      paramCount++;
    }
    if (author !== undefined) {
      fields.push(`author = $${paramCount}`);
      values.push(author);
      paramCount++;
    }

    if (fields.length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }

    fields.push(`updated_at = CURRENT_TIMESTAMP`);
    values.push(id);

    const query = `
      UPDATE posts 
      SET ${fields.join(', ')} 
      WHERE id = $${paramCount} 
      RETURNING *
    `;

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating post:', err);
    res.status(400).json({ message: 'Error update', error: err.message });
  }
}

async function deletePost(req, res) {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'DELETE FROM posts WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: `Post with ID ${id} not found`,
      });
    }

    res.json({
      message: `Post with ID ${id} deleted`,
      deletedPost: result.rows[0],
    });
  } catch (err) {
    console.error('Error deleting post:', err);
    res.status(400).json({ message: 'Wrong ID post', error: err.message });
  }
}
export { getPosts, createPost, deletePost, updatePost, getSinglePost };
