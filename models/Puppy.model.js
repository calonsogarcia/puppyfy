const { Schema, model } = require("mongoose");


const puppySchema = new Schema({
    puppyType: {
        type: String,
        required: true,
        enum: ['Dog', 'Cat', "Other"]
    },
    name: String,
    dateOfBirth: Number,
    sex: {
        type: String,
        required: true,
        enum: ['Felame', 'Male']
    },
    breed: String,
    colour: String,
    familyOptions: String,
    image: String
});


const Puppy = model("Puppy", puppySchema);

module.exports = Puppy;