import { Client, Account, ID } from 'appwrite';

const client = new Client();

const account = new Account(client);

client
  .setEndpoint('http://cloud.appwrite.io/v1')
  .setProject('64385f72bbae8835bef764385f72bbae8835bef7');

const createNewUser = async (email, password, name) => {
  try {
    const NewUser = await account.create(ID.unique(), email, password, name);
    console.log(NewUser);
  } catch (error) {
    console.log(error);
  }
};

export { createNewUser };
