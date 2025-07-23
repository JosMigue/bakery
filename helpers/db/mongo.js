const mongoose = require('mongoose');
require('dotenv').config(); // Para leer .env

const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGO_URI}${process.env.MONGO_DB}`);
  console.log('✅ Connected to MongoDB:', process.env.MONGO_DB);
  mongoose.connection.on('error', err => {
    console.error('❌', err);
  });
};

module.exports = connectDB;