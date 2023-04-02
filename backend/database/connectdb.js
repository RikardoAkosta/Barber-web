import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGO);
  console.log("Connected to DB 😁");
} catch (error) {
  console.error("Error de conexion a mongodb 😫" + error.message);
}
