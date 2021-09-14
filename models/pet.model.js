const { Schema, model } = require("mongoose");
const petSchema = new Schema({

    petType: {
        type: String,
        required: true,
        enum: ['Dogs', 'Cats', "Others"]
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
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