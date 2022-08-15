const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Game_Store`;
// const DB_NAME = 'Game_Store';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = null;

module.exports = () => {
  try {
    if (connection) return connection;
    connection = mongoose.connect(MONGO_DB_URL, OPTIONS);
    return connection;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
