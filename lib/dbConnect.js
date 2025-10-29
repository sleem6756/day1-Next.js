import mongoose from "mongoose";

export async function dbConnect() {
    try {
  await mongoose.connect(`${process.env.DB_URL}/NextApp`);
  console.log("DB Connected Successfully!");
} catch (error) {
  console.log("DB Connected Failed",error);
}
}