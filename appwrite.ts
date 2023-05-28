import { Client, Account, ID, Databases, Storage } from 'appwrite';

const client = new Client()
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject(process.env.NEXT_PUBLIC_APPPWRITE_PROJECT_ID!);
// .setProject('64724568018bb850e2c7');

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage, ID };
