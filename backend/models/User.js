import { Schema, model } from "mongoose";

const userShema = new Schema({
  //hace que el email y el password sean requeridos al momento de registrarse
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    loweercase: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export const User = model("user", userShema);
