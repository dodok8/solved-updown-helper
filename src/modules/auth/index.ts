import { Elysia } from 'elysia'

const auth = new Elysia().group('/auth', (app) => {
  return app
    .post('/sign-up', () => {
      return 'This route is expected to sign up a user'
    })
    .post('/sign-in', () => {
      return 'This route is expected to sign in a user'
    })
})

export default auth
