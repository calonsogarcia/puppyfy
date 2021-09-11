const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
    },
    fullName: String,
    dateOfBirth: Number,
    sex: {
        type: String,
      //  enum: [female, male]
    },
    address: String,
    phone: Number,
    job: String,
    familyStructure: String,
    comments: String,
});

const User = model("User", userSchema);

module.exports = User;