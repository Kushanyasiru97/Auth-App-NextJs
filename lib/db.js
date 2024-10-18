import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://miyuri:VkHMWIhrpUJ18uNZ@nextjs.sjsta.mongodb.net/auth-demo?retryWrites=true&w=majority&appName=nextjs'
  );

  return client;
}
