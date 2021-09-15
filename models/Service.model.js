const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
        serviceType: {
            type: String,
            required: true,
            enum: ['Puppysitters', 'Hairdresser', "Pettrainers", "Veterinary"],
        },
        name: String,
        adress: String,
        contact: Number
    },
    {
        timestamps: true,
    }
);


const Service = model("Service", serviceSchema);

module.exports = Service;