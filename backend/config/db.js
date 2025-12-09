const mongooes = require("mongoose");

const connectDB = async () => {
  try {
    await mongooes.connect(process.env.MONGODB_URL);
    console.log("mongoDb is connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
