import crypto from 'crypto'

export function generateSignature(payload: Buffer | string, secret: string) {
  return crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}
