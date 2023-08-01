import { Prisma } from "@prisma/client"
import { prisma } from "../../prisma/prisma"

const getAllBlogPosts = async () => {
    const blogPosts = await prisma.blogPost.findMany({
        orderBy: {
            createdOn: "desc",
            title: "asc"
        }
    })
    return blogPosts
}

const getBlogPostById = async ({ postId }: { postId: string }) => {
    const blogPost = await prisma.blogPost.findUnique({
        where: { postId }
    })
    return blogPost
}

const createBlogPost = async ({ data }: { data: Prisma.blogPostCreateInput }) => {
    const blogPost = await prisma.blogPost.create({
        data
    })
    return blogPost
}

const updateBlogPost = async ({ postId, data }: { postId: string, data: Prisma.blogPostUpdateInput }) => {
    const blogPost = await prisma.blogPost.update({
        where: { postId },
        data
    })
    return blogPost
}

const deleteBlogPost = async ({ postId }: { postId: string }) => {
    const blogPost = await prisma.blogPost.delete({
        where: { postId }
    })
    return blogPost
}

export const blogPostModel = { getAllBlogPosts, getBlogPostById, createBlogPost, updateBlogPost, deleteBlogPost }