import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://yasiru:nSA7BJq1bR0ldmmI@cluster0.f4s2e.mongodb.net/auth-app?retryWrites=true&w=majority&appName=Cluster0'
  );

  return client;
}
