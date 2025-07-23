require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth/auth');
const connectDB = require('./helpers/db/mongo');
const mongoErrorHandler = require('./helpers/errors/mongoErrorHandler');

app.use(express.json());

connectDB();
app.use('/api', authRoutes);
//app.use(mongoErrorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));