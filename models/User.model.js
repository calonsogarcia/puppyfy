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
        required: true,
    },
    fullName: String,
    dateOfBirth: Number,
    sex: String,
    address: String,
    phone: Number,
    job: String,
    familyStructure: String,
    puppyAdopted:{
        type: Schema.Types.ObjectId,
        ref: 'Puppy'
    },
    comments: String,
});

const User = model("User", userSchema);

module.exports = User;