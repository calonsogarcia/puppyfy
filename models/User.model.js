const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
    },
    fullName: String,
    //email: String,
    dateOfBirth: Number,
    sex: String,
    address: String,
    phone: Number,
    job: String,
    familyStructure: {
        numberOfMembers: Number,
        children: Number,
        otherPets: Boolean,
    },

    comments: String,

});

const User = model("User", userSchema);

module.exports = User;