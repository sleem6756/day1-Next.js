import mongoose from "mongoose";

export async function dbConnect() {
    try {
  await mongoose.connect(`${process.env.DB_URL}/NextApp`);
  if (process.env.NODE_ENV === "development") {
      console.log("DB Connected Successfully!");
  }
} catch (error) {
  if (process.env.NODE_ENV === "development") {
      console.log("DB Connected Failed",error);
  }
}
}