const { Schema, model } = require("mongoose");


const adoptionSchema = new Schema({
    username: String,
    puppyName: String,
    puppyType: {
        type: String,
        required: true,
        enum: ['Dog', 'Cat', "Other"]
    },
    puppyDateOfBirth: Number,
    puppySex: {
        type: String,
        required: true,
        enum: ['Felame', 'Male']
    },
    puppyBreed: String,
    puppyColour: String,
    puppyFamilyOptions: String,
    comments:String
});


const Adoption = model("Adoption", adoptionSchema);

module.exports = Adoption;
