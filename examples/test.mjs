import lorikeet from '@lorikeetai/node-sdk';
import readline from 'node:readline';

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

console.log('Conversation started:', conversation);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function onMessage(message) {
  console.log('Received message:', message);
  rl.question('Enter your message: ', async (answer) => {
    const message = await client.conversation.chat.generate({
      conversationId: conversation.conversationId,
      message: answer,
    });
  });
}

client.conversation.chat.on('message', onMessage);
