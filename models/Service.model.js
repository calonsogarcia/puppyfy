const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
        serviceType: {
            type: String,
            required: true,
            enum: ['Puppysitter', 'Hairdresser', "PuppyTrainer", "Veterinary"],
        },
        name: String,
        address: String,
        contact: String,
        image: String,
    },
    {
        timestamps: true,
    }
);


const Service = model("Service", serviceSchema);

module.exports = Service;