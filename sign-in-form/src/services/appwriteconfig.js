import { Client, Account, ID } from 'appwrite';

const client = new Client();

const account = new Account(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64385f72bbae8835bef7');

const createNewUser = async (mail, password, name) => {
  // const promise = account.create(ID.unique(), mail, password, name);

  // promise.then(
  //   function (response) {
  //     console.log(response); // Success
  //   },
  //   function (error) {
  //     console.log(error); // Failure
  //   }
  // );

  try {
    const promise = await account.create(ID.unique(), mail, password, name);
    console.log(promise);
    return promise;
  } catch (error) {
    console.log(error);
  }
};

const createEmailSession = async (email, password) => {
  try {
    const promise = await account.createEmailSession(email, password);
    console.log(promise);
    return promise;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const createMagicUrlSession = async (userId, email) => {
  try {
    const promise = await account.createMagicURLSession(userId, email);
    console.log(promise);
    return promise;
  } catch (error) {
    console.log(error);
  }
};

export { createNewUser, createEmailSession, createMagicUrlSession };
