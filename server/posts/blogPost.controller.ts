import { NextFunction, Request, Response } from "express";
import { blogPostService } from "./blogPost.service";

const getAllBlogPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const blogPosts = await blogPostService.getAllBlogPosts();
        console.log(blogPosts)
        res.status(200).json(blogPosts);
    } catch (error) {
        next(error)
    }
}

const getBlogPostById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const blogPost = await blogPostService.getBlogPostById({ postId: req.params.id })
        if (blogPost)
            res.status(200).json(blogPost)
        else
            res.status(400).json({ type: "404 Not Found", message: "This Id doesn't cotain any blog post" });
    } catch (error) {
        next(error);
    }
}

const createBlogPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const blogPostData = req.body
        const createdBlogPost = await blogPostService.createBlogPost({ blogPostData })
        res.status(200).json(createdBlogPost);
    } catch (error) {
        next(error)
    }
}

const updateBlogPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const blogPostData = req.body
        const postId = req.params.id
        const updatedBlogPost = await blogPostService.updateBlogPost({ postId: postId, blogPostData })
        res.status(200).json(updatedBlogPost);
    } catch (error) {
        next(error)
    }
}

const deleteBlogPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const postId = req.params.id
        const deletedBlogPost = await blogPostService.deleteBlogPost({ postId });
        res.status(200).json({ message: "Post related to the PostId deleted Successfully!" })
    } catch (error) {
        next(error)
    }
}

export const blogPostController = { getAllBlogPosts, getBlogPostById, createBlogPost, updateBlogPost, deleteBlogPost }