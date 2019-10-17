import { Router } from 'express';
import blog from '../routes/blogRoutes';

const router = new Router();

router.use('/blog',blog);

export default router;

