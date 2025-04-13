import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('MongoDB Atlas подключен');
  } catch (err) {
    console.error('MongoDB ошибка подключения:', err);
  }
};

export default connectDB;
