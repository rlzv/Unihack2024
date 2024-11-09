const sampleTours = [
    {
        name: "Historical Landmarks Tour",
        description: "Explore Timișoara's rich historical sites in a single day.",
        tripType: "Family Trip",
        categories: ["Historical Landmarks", "Culture"],
        destinationsKey: "UnionSquare|VictorySquare|TimisoaraCathedral|HuniadeCastle|LibertySquare",
        destinations: [
            {
                name: "Union Square",
                description: "The heart of Timișoara with Baroque buildings and vibrant atmosphere.",
                location: { type: "Point", coordinates: [21.2272, 45.7551] },
            },
            {
                name: "Victory Square",
                description: "A popular square featuring cultural and historical monuments.",
                location: { type: "Point", coordinates: [21.2279, 45.7494] },
            },
            {
                name: "Timișoara Orthodox Cathedral",
                description: "An iconic Orthodox cathedral in the city center.",
                location: { type: "Point", coordinates: [21.2281, 45.7500] },
            },
            {
                name: "Huniade Castle",
                description: "A medieval castle housing historical artifacts and exhibitions.",
                location: { type: "Point", coordinates: [21.2244, 45.7545] },
            },
            {
                name: "Liberty Square",
                description: "A square with historical significance, surrounded by classic architecture.",
                location: { type: "Point", coordinates: [21.2260, 45.7540] },
            },
        ],
    },
    {
        name: "Romantic Timișoara Getaway",
        description: "A relaxing trip for couples with cozy destinations and scenic spots.",
        tripType: "Partner Trip",
        categories: ["Great Food", "Unique Accommodation", "Cafes and Coffee Culture"],
        destinationsKey: "BotanicalPark|RiviereTimisoara|BelvedereRestaurant|RosesPark|ArtMuseum",
        destinations: [
            {
                name: "Botanical Park",
                description: "A quiet green space with beautiful flora, perfect for a romantic stroll.",
                location: { type: "Point", coordinates: [21.2295, 45.7555] },
            },
            {
                name: "Rivière Timișoara",
                description: "A peaceful riverside area ideal for picnics and quiet moments.",
                location: { type: "Point", coordinates: [21.2300, 45.7569] },
            },
            {
                name: "Belvedere Restaurant",
                description: "A romantic restaurant with great views and fine dining.",
                location: { type: "Point", coordinates: [21.2249, 45.7525] },
            },
            {
                name: "Roses Park",
                description: "A beautiful park featuring a variety of rose species.",
                location: { type: "Point", coordinates: [21.2305, 45.7488] },
            },
            {
                name: "Timișoara Art Museum",
                description: "A museum showcasing European and Romanian art.",
                location: { type: "Point", coordinates: [21.2270, 45.7523] },
            },
        ],
    },
    {
        name: "Family Fun Adventure",
        description: "A family-friendly tour with fun attractions and educational sites.",
        tripType: "Family Trip",
        categories: ["Outdoor Activities", "Must-see Attractions"],
        destinationsKey: "BanatVillageMuseum|Children'sPark|ZooTimisoara|ScienceMuseum|LibertySquare",
        destinations: [
            {
                name: "Banat Village Museum",
                description: "An open-air museum depicting traditional village life in Romania.",
                location: { type: "Point", coordinates: [21.2373, 45.7644] },
            },
            {
                name: "Children's Park",
                description: "A park with playgrounds and fun activities for children.",
                location: { type: "Point", coordinates: [21.2290, 45.7501] },
            },
            {
                name: "Zoo Timișoara",
                description: "A family-friendly zoo featuring various species and animal habitats.",
                location: { type: "Point", coordinates: [21.2453, 45.7682] },
            },
            {
                name: "Science Museum",
                description: "An educational museum with interactive exhibits on science and technology.",
                location: { type: "Point", coordinates: [21.2344, 45.7550] },
            },
            {
                name: "Liberty Square",
                description: "A historical square surrounded by architecture that tells Timișoara's story.",
                location: { type: "Point", coordinates: [21.2260, 45.7540] },
            },
        ],
    },
    {
        name: "Culinary Delights of Timișoara",
        description: "A tour of Timișoara's finest dining establishments and local markets.",
        tripType: "Friends Trip",
        categories: ["Great Food", "Shopping Streets", "Cafes and Coffee Culture"],
        destinationsKey: "CentralMarket|LaCalulAlb|BelvedereRestaurant|FishMarket|CafeClandestino",
        destinations: [
            {
                name: "Central Market",
                description: "A bustling market offering fresh produce and local delicacies.",
                location: { type: "Point", coordinates: [21.2250, 45.7540] },
            },
            {
                name: "La Calul Alb",
                description: "A traditional Romanian restaurant with authentic cuisine.",
                location: { type: "Point", coordinates: [21.2222, 45.7520] },
            },
            {
                name: "Belvedere Restaurant",
                description: "A modern dining experience with a beautiful view.",
                location: { type: "Point", coordinates: [21.2249, 45.7525] },
            },
            {
                name: "Fish Market",
                description: "Fresh seafood and local fish specialties.",
                location: { type: "Point", coordinates: [21.2231, 45.7547] },
            },
            {
                name: "Cafe Clandestino",
                description: "A hidden cafe with a cozy atmosphere and excellent coffee.",
                location: { type: "Point", coordinates: [21.2278, 45.7562] },
            },
        ],
    },
    {
        name: "Art and Culture Discovery",
        description: "Visit Timișoara's art galleries, museums, and cultural hotspots.",
        tripType: "Solo Trip",
        categories: ["Art Galleries and Museums", "Arts & Theatre", "Culture"],
        destinationsKey: "ArtMuseum|NationalTheater|LibertySquare|UniversityLibrary|SculptureGarden",
        destinations: [
            {
                name: "Timișoara Art Museum",
                description: "A museum showcasing a variety of artworks from local and international artists.",
                location: { type: "Point", coordinates: [21.2270, 45.7523] },
            },
            {
                name: "National Theater",
                description: "An iconic theater hosting a variety of performances and shows.",
                location: { type: "Point", coordinates: [21.2265, 45.7499] },
            },
            {
                name: "Liberty Square",
                description: "A historical area with significant cultural landmarks.",
                location: { type: "Point", coordinates: [21.2260, 45.7540] },
            },
            {
                name: "University Library",
                description: "A historic library with a large collection of books and manuscripts.",
                location: { type: "Point", coordinates: [21.2304, 45.7521] },
            },
            {
                name: "Sculpture Garden",
                description: "An outdoor exhibition of unique sculptures by local artists.",
                location: { type: "Point", coordinates: [21.2315, 45.7510] },
            },
        ],
    }
];

module.exports = sampleTours;
