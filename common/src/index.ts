import z from "zod"

const signUpObject = z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string()
})

export type signUpType = z.infer<typeof signUpObject>

const signInObject = z.object({
    email: z.string().email(),
    password: z.string()
})

export type signInType = z.infer<typeof signInObject>

const createPostInput = z.object({
    title: z.string(),
    content: z.string(),
})

export type createInputTpye = z.infer<typeof createPostInput>

const updatePostInput = z.object({
    title: z.string(),
    content: z.string(),
})

export type updateInputType = z.infer<typeof updatePostInput>