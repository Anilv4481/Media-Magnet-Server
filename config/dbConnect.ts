// const config = {
//   PORT: process.env.PORT || 5000,
//   MONGODB_URL: "mongodb://127.0.0.1:27017/Ecommerce-DB",
//   //   MONGODB_URL:
//   //     "mongodb+srv://sajan12:gcGzjKcytgAUyTFW@my-mon-db.dpkvaae.mongodb.net/",
// };

import mongoose from "mongoose";

export async function initMongo() {
  if (!process.env.MONGODB_URL) throw new Error("MongoDB URL Not Configured");
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("MongoDB Connection Successful");
}
