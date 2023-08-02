import { Router } from "express";
import { blogPostController } from "./blogPost.controller";
import { validate } from "../middleware/validation.middleware";
import { blogPostCreateRequestSchema, blogPostParamsOnlyRequestSchema, blogPostUpdateRequestSchema } from "../validation/blogPost.validation";


export const router = Router();

router.get('/', blogPostController.getAllBlogPosts)
router.get('/:id', validate(blogPostParamsOnlyRequestSchema), blogPostController.getBlogPostById)
router.post('/', validate(blogPostCreateRequestSchema), blogPostController.createBlogPost); 
router.put('/:id', validate(blogPostUpdateRequestSchema), blogPostController.updateBlogPost);
router.delete('/:id', validate(blogPostParamsOnlyRequestSchema), blogPostController.deleteBlogPost);
