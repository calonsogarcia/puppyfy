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
    breed: String,
    colour: String,
    familyOptions: String,
    image: String

});



const Pet = model("Pet", petSchema);

module.exports = Pet;