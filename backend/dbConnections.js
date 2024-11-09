const mongoose = require('mongoose');
require('dotenv').config();

const userDBConnection = mongoose.createConnection(process.env.Atlas_URL_UserDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const tourDBConnection = mongoose.createConnection(process.env.Atlas_URL_TourDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

userDBConnection.on('connected', () => console.log('Connected to UserDB database'));
tourDBConnection.on('connected', () => console.log('Connected to TourDB database'));

module.exports = {
    userDBConnection,
    tourDBConnection,
};
