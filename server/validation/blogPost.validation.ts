
import * as yup from "yup"

export const blogPostCreateRequestSchema = yup.object({
    body: yup.object({
        title: yup.string()
            .required("Enter a valid title for post")
            .min(3, "Mininum 3 characters!"),
        description: yup.string()
    })
})

export const blogPostUpdateRequestSchema = yup.object({
    params: yup.object({
        postId: yup.string()
            .uuid(),
    }),
    body: yup.object({
        title: yup.string()
            .required("Enter a valid title for post")
            .min(3, "Mininum 3 characters!"),
        description: yup.string()
    })
})

export const blogPostParamsOnlyRequestSchema = yup.object({
    params: yup.object({
        postId: yup.string()
            .uuid(),
    })
})