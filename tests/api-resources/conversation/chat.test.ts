// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk'
import { Response } from 'node-fetch'

const client = new Lorikeet({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
})

describe('resource chat', () => {
  test('generate: only required params', async () => {
    const responsePromise = client.conversation.chat.generate({ conversationId: {}, message: 'message' })
    const rawResponse = await responsePromise.asResponse()
    expect(rawResponse).toBeInstanceOf(Response)
    const response = await responsePromise
    expect(response).not.toBeInstanceOf(Response)
    const dataAndResponse = await responsePromise.withResponse()
    expect(dataAndResponse.data).toBe(response)
    expect(dataAndResponse.response).toBe(rawResponse)
  })

  test('generate: required and optional params', async () => {
    const response = await client.conversation.chat.generate({ conversationId: {}, message: 'message' })
  })

  test('get: only required params', async () => {
    const responsePromise = client.conversation.chat.get({ conversationId: 'conversationId' })
    const rawResponse = await responsePromise.asResponse()
    expect(rawResponse).toBeInstanceOf(Response)
    const response = await responsePromise
    expect(response).not.toBeInstanceOf(Response)
    const dataAndResponse = await responsePromise.withResponse()
    expect(dataAndResponse.data).toBe(response)
    expect(dataAndResponse.response).toBe(rawResponse)
  })

  test('get: required and optional params', async () => {
    const response = await client.conversation.chat.get({ conversationId: 'conversationId' })
  })

  test('start: only required params', async () => {
    const responsePromise = client.conversation.chat.start({ customerId: {} })
    const rawResponse = await responsePromise.asResponse()
    expect(rawResponse).toBeInstanceOf(Response)
    const response = await responsePromise
    expect(response).not.toBeInstanceOf(Response)
    const dataAndResponse = await responsePromise.withResponse()
    expect(dataAndResponse.data).toBe(response)
    expect(dataAndResponse.response).toBe(rawResponse)
  })

  test('start: required and optional params', async () => {
    const response = await client.conversation.chat.start({
      customerId: {},
      subject: 'Question about order tracking number',
    })
  })
})
