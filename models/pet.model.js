const { Schema, model } = require("mongoose");
const serviceSchema = new Schema({

    petType: {
        type: String,
        required: true,
        enum: ['Dogs', 'Cats', "Others"],
    },
    name: String,
    dateOfBirth: Number,
    sex: String,
    Breed: String,
    Color: String,
    FamilyOptions: String,
    image: String

});

petType, name, breed, dateOfBirth, sex, colour, familyOptions

const Pet = model("Pet", petSchema);

module.exports = Pet;