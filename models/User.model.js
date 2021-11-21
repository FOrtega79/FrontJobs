const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {type: String, unique:true, required: true},
    password: {type: String, required:true},
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "Can't be blank"],
      match: [/\S+@\S+\.\S+/, "Email not valid"]
    },
  }, {timestamps: true},
);

const User = model("User", userSchema);

module.exports = User;
