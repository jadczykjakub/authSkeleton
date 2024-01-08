import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
});

// @ts-ignore
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.loginUser = async function (email, password) {
  // @ts-ignore
  const user = await this.findOne({ email });

  if (user) {
    // @ts-ignore
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

export default mongoose.model("Users", userSchema);
