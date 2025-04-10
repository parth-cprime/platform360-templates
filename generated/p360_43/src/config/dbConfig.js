const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = { connectToDatabase };

// The dbConfig module exports a function to establish a connection to the MongoDB
// database using the Mongoose library. It uses the MONGODB_URI environment variable
// to determine the connection URL. If the connection fails, it logs an error and
// terminates the process.