/**
 * @ts-check
 */
import lorikeet from '@lorikeetai/node-sdk';

const client = new lorikeet.Lorikeet();

/**
 * Generate a customer - if this already exists or you already have a customer id, you can skip this step
 */
const customer = await client.customer.create({
  firstName: 'John',
  lastName: 'Doe',
  displayName: 'John Doe',
  email: 'john@test.com',
  remoteId: '1234_definitely_legit',
});

/**
 * Sync customer profile example after creating a customer
 * Ensure you use the customer id from the customer object.
 *
 * A Lorikeet workflow can now use the `test` field to do something.
 */
const customerProfile = await client.customer.profile.sync(customer.id, {
  data: {
    test: 'test',
  },
});

console.log(customerProfile);

/**
 * customer token creation might follow this.
 */
const token = await client.customer.token({
  displayName: 'John Doe',
  email: 'john@test.com',
});

console.log(token);

/**
 * Example: Stream chat events for the created conversation
 */
const ac = new AbortController();

const stream = client.conversation.chat.stream(
  { conversationId: 'convo-id-123' },
  { signal: ac.signal }
);

console.log('Streaming chat events...');
try {
  for await (const evt of stream) {
    console.log('Stream event:', evt);
  }
} catch (err) {
  console.error('Stream error:', err);
} finally {
  ac.abort();
}
