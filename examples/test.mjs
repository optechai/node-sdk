import lorikeet from '@lorikeetai/node-sdk';
import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
  subject: 'Conversation initiated from SDK example repo',
  customerId: customer.id,
});

console.log(`Conversation ID: ${conversation.conversationId}`);
console.log(`url: https://app.lorikeetcx.ai/conversation/${conversation.conversationId}\n`);

while (true) {
  const message = await rl.question('You: ');
  await client.conversation.chat.generate({
    conversationId: conversation.conversationId,
    message,
  });
  const response = await client.conversation.chat.poll({
    conversationId: conversation.conversationId,
  });

  console.log(`Bot: ${response.messages[response.messages.length - 1].content}`);
}

rl.close();
