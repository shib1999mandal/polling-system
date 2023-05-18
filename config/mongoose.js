const mongoose = require("mongoose");
// mongoDB atlas uri
// const URI =
  // "mongodb+srv://shiba1999mandal:shibaram123@cluster0.nzaswbq.mongodb.net/poling-system?retryWrites=true&w=majority";
  mongoose.connect(process.env.MONGO_URI);
// connecting to mongoDB atlas
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to DataBase :: MongoDB");
};
module.exports = connectDB;
