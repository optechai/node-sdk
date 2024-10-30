// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk'

const client = new Lorikeet({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
})

describe('resource ingest', () => {
  test('validate', async () => {
    const responsePromise = client.ingest.validate()
    const rawResponse = await responsePromise.asResponse()
    expect(rawResponse).toBeInstanceOf(Response)
    const response = await responsePromise
    expect(response).not.toBeInstanceOf(Response)
    const dataAndResponse = await responsePromise.withResponse()
    expect(dataAndResponse.data).toBe(response)
    expect(dataAndResponse.response).toBe(rawResponse)
  })

  test('validate: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.ingest.validate({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Lorikeet.NotFoundError,
    )
  })
})
