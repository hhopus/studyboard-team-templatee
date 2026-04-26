import mongoose from 'mongoose';
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

export async function connectDb() {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('MONGO_URI is not set');
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri);
  console.log('[db] connected');
}