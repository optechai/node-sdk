import crypto from 'crypto'

/**
 * Generate a signature for a given payload using a secret key.
 *
 * @param payload - The payload to sign - If no payload is provided, the signature will be generated for an empty string.
 */
export function generateSignature(payload: Buffer | string | undefined, secret: string) {
  if (!payload) {
    return crypto.createHmac('sha256', secret).digest('base64').replace(/\+/g, '-').replace(/\//g, '_')
  }

  return crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}
