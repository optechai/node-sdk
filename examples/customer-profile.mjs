/**
 * @ts-check
 */
import lorikeet from '@lorikeetai/node-sdk';

const client = new lorikeet.Lorikeet();

const customer = await client.customer.create({
  firstName: 'John',
  lastName: 'Doe',
  displayName: 'John Doe',
  email: 'john@test.com',
  remoteId: '1234_definitely_legit',
});

const customerProfile = await client.customer.profile.sync(customer.id, {
  data: {
    test: 'test',
  },
});

console.log(customerProfile)