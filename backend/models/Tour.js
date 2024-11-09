const mongoose = require('mongoose');
const { tourDBConnection } = require('../dbConnections');

const tourSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, // Ensure unique tour names
    description: { type: String, required: true },
    tripType: {
        type: String,
        enum: ["Solo Trip", "Partner Trip", "Friends Trip", "Family Trip"],
        required: true
    },
    categories: {
        type: [String],
        validate: {
            validator: function (value) {
                // Ensure at least one category from specified list
                const requiredCategories = [
                    "Must-see Attractions",
                    "Great Food",
                    "Hidden Gems",
                    "Historical Landmarks",
                    "Traditional Romanian Cuisine",
                    "Art Galleries and Museums",
                    "Unique Accommodation",
                    "Outdoor Activities",
                    "Shopping Streets",
                    "Cafes and Coffee Culture",
                    "Adventure and Sports",
                    "Arts & Theatre"
                ];
                return value.some(category => requiredCategories.includes(category));
            },
            message: "Categories must include at least one of the specified values."
        }
    },
    destinationsKey: { type: String, unique: true, required: true }, // Unique identifier for destinations
    destinations: [
        {
            name: { type: String, required: true },
            description: String,
            location: {
                type: { type: String, enum: ['Point'], default: 'Point' },
                coordinates: { type: [Number], required: true },
            },
        },
    ],
});

// Create a unique index on destinationsKey to enforce uniqueness in the database
tourSchema.index({ destinationsKey: 1 }, { unique: true });

module.exports = tourDBConnection.model('Tour', tourSchema);
