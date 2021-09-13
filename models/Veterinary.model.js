const { Schema, model } = require("mongoose");

const veterinarySchema = new Schema({
    type: String,
    name: String,
    adress: String,
    contact: Number
});



const Veterinary = model("Veterinary", veterinarySchema);

module.exports = Veterinary;