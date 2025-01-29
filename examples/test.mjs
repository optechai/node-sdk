/**
 * @ts-check
 */
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

const firstMessaage = await client.conversation.chat.get({
  conversationId: conversation.conversationId,
});

console.log(`Bot: ${firstMessaage.messages[0].content}`);

while (true) {
  const message = await rl.question('You: ');
  const response = await client.conversation.chat.message({
    message,
    conversationId: conversation.conversationId,
  });

  console.log(`Bot: ${response.messages[response.messages.length - 1].content}`);
  const escalation = response.events.find((event) => event.type === 'ESCALATED');

  if (escalation) {
    console.log(`********\nESCALATION\n********\nReason: {${escalation.escalationReason}}`);
    break;
  }
}

rl.close();
