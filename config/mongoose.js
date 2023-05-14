const mongoose = require("mongoose");
// mongoDB atlas uri
const URI =
  "mongodb+srv://shiba1999mandal:QtGXxdhDLug86SMF@cluster0.5m8y9l8.mongodb.net/?retryWrites=true&w=majority";

// connecting to mongoDB atlas
const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to DataBase :: MongoDB");
};
module.exports = connectDB;
