
import { PrismaClient } from '@prisma/client/extension'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRoutes } from './routes/blog';


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();

app.use("/api/v1/user", userRouter)
app.use("/api/v1/blog", blogRoutes)

