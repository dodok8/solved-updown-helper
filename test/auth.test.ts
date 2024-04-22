import { describe, expect, it } from 'bun:test'

import { app } from '../src/index'

const BASE = 'http://localhost:3000'

describe('/auth', () => {
  it('/sign-up', async () => {
    const init = {
      method: 'POST'
    }
    const response = await app
      .handle(new Request(`${BASE}/auth/sign-up`, init))
      .then((res) => res.text())

    expect(response).toBe('This route is expected to sign up a user')
  })
  it('/sign-in', async () => {
    const init = {
      method: 'POST'
    }
    const response = await app
      .handle(new Request(`${BASE}/auth/sign-in`))
      .then((res) => res.text())

    expect(response).toBe('This route is expected to sign in a user')
  })
})
