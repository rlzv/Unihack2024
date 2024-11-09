const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const User = require('./models/User'); // User model connected to UserDB
const Tour = require('./models/Tour'); // Tour model connected to TourDB
const UserPreferences = require('./models/UserPreferences'); // UserPreferences model

const app = express();
app.use(cors());
app.use(express.json());

// Mailchimp subscription route
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATA_CENTER = process.env.MAILCHIMP_DATA_CENTER;

    const url = `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    try {
        const response = await axios.post(
            url,
            { email_address: email, status: 'subscribed' },
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
                },
            }
        );
        res.status(200).json({ message: 'Successfully subscribed!' });
    } catch (error) {
        console.error('Error subscribing to Mailchimp:', error.message);
        res.status(500).json({ error: 'An error occurred. Please try again later.' });
    }
});


// User registration route
app.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// User login/authentication route
app.post('/api/users/authenticate', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.comparePassword(password))) {
        res.status(200).json({ message: 'Authenticated', user });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Tour routes
app.post('/api/tours', async (req, res) => {
    try {
        const newTour = new Tour(req.body);
        await newTour.save();
        res.status(201).json(newTour);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/api/tours', async (req, res) => {
    try {
        const tours = await Tour.find();
        res.json(tours);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/tours/recommend', async (req, res) => {
    try {
        const { tripType, interests } = req.body;

        // Construct a query that checks for an exact match on tripType and an overlap in categories
        const query = {
            tripType: tripType,                   // Exact match on tripType
            categories: { $in: interests }         // At least one match in categories
        };

        // Log query details to help debug
        console.log("Constructed Query:", query);
        console.log("Requested tripType:", tripType);
        console.log("Requested interests:", interests);

        // Execute the query
        const matchingTours = await Tour.find(query);

        // Log matching documents to verify
        console.log("Matching Tours:", matchingTours);

        res.json(matchingTours);
    } catch (error) {
        console.error("Error fetching matching tours:", error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
