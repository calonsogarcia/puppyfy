const { Schema, model } = require("mongoose");


const puppySchema = new Schema({
    puppyType: {
        type: String,
        required: true,
        enum: ['Dog', 'Cat', "Other"]
    },
    name: String,
    birthDate: String,
    sex: {
        type: String,
        required: true,
        enum: ['Female', 'Male']
    },
    breed: String,
    colour: String,
    familyOptions: String,
    image: String,
    comments: String
});


const Puppy = model("Puppy", puppySchema);

module.exports = Puppy;