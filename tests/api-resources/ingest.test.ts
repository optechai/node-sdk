// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk'

const client = new Lorikeet({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
})

describe('resource ingest', () => {
  test('validate: only required params', async () => {
    const responsePromise = client.ingest.validate({ data: {} })
    const rawResponse = await responsePromise.asResponse()
    expect(rawResponse).toBeInstanceOf(Response)
    const response = await responsePromise
    expect(response).not.toBeInstanceOf(Response)
    const dataAndResponse = await responsePromise.withResponse()
    expect(dataAndResponse.data).toBe(response)
    expect(dataAndResponse.response).toBe(rawResponse)
  })

  test('validate: required and optional params', async () => {
    const response = await client.ingest.validate({ data: {} })
  })

  test('webhooks: only required params', async () => {
    const responsePromise = client.ingest.webhooks(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { data: {} },
    )
    const rawResponse = await responsePromise.asResponse()
    expect(rawResponse).toBeInstanceOf(Response)
    const response = await responsePromise
    expect(response).not.toBeInstanceOf(Response)
    const dataAndResponse = await responsePromise.withResponse()
    expect(dataAndResponse.data).toBe(response)
    expect(dataAndResponse.response).toBe(rawResponse)
  })

  test('webhooks: required and optional params', async () => {
    const response = await client.ingest.webhooks(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { data: {} },
    )
  })
})
