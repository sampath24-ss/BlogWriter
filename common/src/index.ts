import z from 'zod'
export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(2),
  })

  

  export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    
  })

  

  export const createBlogInput = z.object({
    title: z.string().min(1),
    content: z.string().min(10),
  })

  

  export const updateBlogInput = z.object({
    title: z.string().min(1),
    content: z.string().min(10),
    id: z.string(),
  })

  export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
  export type CreateBlogInput = z.infer<typeof createBlogInput>;
  export type SigninInput = z.infer<typeof signinInput>;
  export type SignupInput = z.infer<typeof signupInput>;

