const { Schema, model } = require("mongoose");


const adoptionSchema = new Schema({
        username: String,
  /*       {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }, */
        puppyName: String,
        puppyType: {
            type: String,
            required: true,
            enum: ['Dog', 'Cat', "Other"]
        },
        puppyDateOfBirth: String,
        puppySex: {
            type: String,
            required: true,
            enum: ['Female', 'Male']
        },
        puppyBreed: String,
        puppyColour: String,
        puppyFamilyOptions: String,
        comments:String
    },
    {
        timestamps: true,
    }
);


const Adoption = model("Adoption", adoptionSchema);

module.exports = Adoption;
