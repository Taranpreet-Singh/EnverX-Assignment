import { blogPostCreateInput, blogPostUpdateInput } from "../types/blogPost.types"
import { blogPostModel } from "./blogPost.model"

const getAllBlogPosts = async () => {
    const blogPosts = await blogPostModel.getAllBlogPosts();
    return blogPosts;
}

const getBlogPostById = async ({ postId }: { postId: string }) => {
    const blogPost = await blogPostModel.getBlogPostById({ postId })
    return blogPost
}

const createBlogPost = async ({ blogPostData }: { blogPostData: blogPostCreateInput }) => {
    const createdBlogPost = await blogPostModel.createBlogPost({ data: blogPostData })
    return createdBlogPost
}

const updateBlogPost = async ({ postId, blogPostData }: { postId: string, blogPostData: blogPostCreateInput }) => {
    const updatedBlogPost = await blogPostModel.updateBlogPost({ postId, data: blogPostData })
    return updatedBlogPost
}

const deleteBlogPost = async ({ postId }: { postId: string }) => {
    const deletedBlogPost = await blogPostModel.deleteBlogPost({ postId })
    return deleteBlogPost
}

export const blogPostService = { getAllBlogPosts, getBlogPostById, createBlogPost, updateBlogPost, deleteBlogPost }