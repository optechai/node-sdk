import lorikeet from '@lorikeetai/node-sdk';

const client = new lorikeet.Lorikeet();

const customer = await client.customer.create({
  firstName: 'John',
  lastName: 'Doe',
  displayName: 'John Doe',
  email: 'john@test.com',
  remoteId: '1234_definitely_legit',
});

const conversation = await client.conversation.chat.start({
  publicKey: process.env.LORIKEET_PUBLIC_KEY,
  customerId: customer.id,
});

const message = await client.conversation.chat.generate({
  conversationId: conversation.conversationId,
  message: 'Hi there, I was wondering if you could help me with something?',
});

console.log(message);
