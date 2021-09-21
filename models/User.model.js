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
        sex: {
            type: String,
            enum: ["Female", "Male"],
        },
        address: String,
        phone: Number,
        job: String,
        familyStructure: String,
        userImage: {
            type: String,
            default: 'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg'
        },
        comments: String,
    },
    {
        timestamps: true,
    }
);

const User = model("User", userSchema);

module.exports = User;