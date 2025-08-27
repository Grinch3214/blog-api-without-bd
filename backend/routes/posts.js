import express from 'express';
import {
  getPosts,
  createPost,
  // getSinglePost,
  // updateSinglePost,
  // deleteSinglePost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
// router.get('/:id', getSinglePost);
router.post('/', createPost);
// router.patch('/:id', updateSinglePost);
// router.delete('/:id', deleteSinglePost);

export default router;
