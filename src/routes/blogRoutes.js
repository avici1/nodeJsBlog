import blog from '../controllers/blogController';
import { Router } from 'express';

const router = new Router();

router.post('/new',blog.newBlog);
router.put('/:id',blog.updateblog);
router.delete('/:id',blog.deleteBlog);
router.get('/post',blog.getblog);
router.get('/',blog.getListblog);
export default router;