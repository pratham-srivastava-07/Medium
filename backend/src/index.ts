import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup', (c) => {
  return c.text("Signup page");
})

app.post('/api/v1/user/signin', (c) => {
  return c.text("Signin page")
})

app.post('/api/v1/blog', (c)=> {
  return c.text("Blog endpoint")
})

app.put('/api/v1/blog', (c) => {
  return c.text("signin route");
} )

app.get('/api/v1/blog/:id', (c)=> {
  const id = c.req.param('id');
  console.log(id);
  return c.text("Get blog endpoint")
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Data endpoint')
})
export default app
