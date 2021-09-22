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
        image: {
            type: String,
            default: 'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg'
        }
    },
    {
        timestamps: true,
    }
);


const Service = model("Service", serviceSchema);

module.exports = Service;