const { Schema, model } = require("mongoose");

const adoptionSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    puppy_id: {
        type: Schema.Types.ObjectId,
        ref: "Puppy",
    },
}, {
    timestamps: true,
});

const Adoption = model("Adoption", adoptionSchema);

module.exports = Adoption;