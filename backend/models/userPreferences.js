const mongoose = require('mongoose');

const UserPreferencesSchema = new mongoose.Schema({
    arrivalDate: { type: Date, required: true },
    departureDate: { type: Date, required: true },
    tripType: { type: String, required: true },
    interests: { type: [String], required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Link to the User model
});

const UserPreferences = mongoose.model('UserPreferences', UserPreferencesSchema);

module.exports = UserPreferences;
