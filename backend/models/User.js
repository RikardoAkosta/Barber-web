import bcryptjs from "bcryptjs";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
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

/* Código para encriptar las contraseñas  */
userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  try {
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salt);
    next();
  } catch (error) {
    console.log(error);
    throw new Error("Falló el hash de contraseña");
  }
});

userSchema.methods.comparePassword = async function (canditatePassword) {
  return await bcryptjs.compare(canditatePassword, this.password);
};

export const User = model("User", userSchema);
