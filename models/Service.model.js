const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
        serviceType: {
            type: String,
            required: true,
            enum: ['PuppySitter', 'Hairdresser', "PuppyTrainer", "Veterinary"],
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