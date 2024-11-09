require('dotenv').config();
const { tourDBConnection } = require('./dbConnections'); // Import the tour-specific database connection
const Tour = require('./models/Tour'); // Import the Tour model connected to TourDB
const Tours = require('./tours');
// Define sample tours with unique destinationsKey values
const sampleTours = Tours


const insertTours = async () => {
    try {
        console.log("Inserting sample tours into TourDB...");

        for (const tourData of sampleTours) {
            try {
                const existingTour = await Tour.findOne({ destinationsKey: tourData.destinationsKey });

                if (!existingTour) {
                    await Tour.create(tourData);
                    console.log(`Inserted tour: ${tourData.name}`);
                } else {
                    console.log(`Duplicate tour skipped: ${tourData.name}`);
                }
            } catch (error) {
                if (error.code === 11000) {
                    console.log(`Duplicate tour skipped due to unique constraint: ${tourData.name}`);
                } else {
                    console.error(`Error inserting tour ${tourData.name}:`, error);
                }
            }
        }
        console.log("Sample tours insertion complete");
    } catch (error) {
        console.error("Error during insertion:", error);
    } finally {
        tourDBConnection.close();
    }
};

insertTours();