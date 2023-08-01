import { Router } from "express";
import { blogPostController } from "./blogPost.controller";
import { validate } from "../middleware/validation.middleware";
import { blogPostCreateRequestSchema, blogPostUpdateRequestSchema } from "../validation/blogPost.validation";


export const router = Router();

router.get('/', blogPostController.getAllBlogPosts)
router.get('/:id', blogPostController.getBlogPostById)
router.post('/', validate(blogPostCreateRequestSchema), blogPostController.createBlogPost); 
router.put('/:id', validate(blogPostCreateRequestSchema), blogPostController.updateBlogPost);
router.delete('/:id', blogPostController.deleteBlogPost);
