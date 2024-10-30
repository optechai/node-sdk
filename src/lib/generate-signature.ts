import crypto from 'crypto'

/**
 * Generate a signature for a given payload using a secret key.
 */
export function generateSignature(payload: Buffer | string, secret: string) {
  return crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}
