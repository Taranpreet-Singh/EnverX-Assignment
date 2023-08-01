import * as yup from "yup"
import { blogPostCreateRequestSchema, blogPostUpdateRequestSchema } from "../validation/blogPost.validation"


export type blogPostCreateInput = yup.InferType<typeof blogPostCreateRequestSchema>['body']
export type blogPostUpdateInput = yup.InferType<typeof blogPostUpdateRequestSchema>['body']