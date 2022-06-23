const mongoose = require('mongoose');
const { Schema } = mongoose;

const registerSchema = new Schema({
    locationName: String,
    description: String,
    phone: Number,
    contactPerson: String,
    clientCoordinate: Object
});


const registerModel = mongoose.model('registration', registerSchema);

module.exports = { registerModel };