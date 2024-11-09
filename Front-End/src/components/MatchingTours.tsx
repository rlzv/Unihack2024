import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  CardMedia,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Polyline,
} from 'react-leaflet';
import L, { DivIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import marker images
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Import Leaflet Routing Machine and its CSS
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// **Set the default icon URLs for Leaflet**
delete L.Icon.Default.prototype.options.iconUrl;
delete L.Icon.Default.prototype.options.iconRetinaUrl;
delete L.Icon.Default.prototype.options.shadowUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MatchingTours: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDestinationId, setSelectedDestinationId] =
    React.useState<string | null>(null);

  // Define the light theme
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#005faf',
      },
      background: {
        default: '#ffffff',
        paper: '#ffffff',
      },
      text: {
        primary: '#000000',
        secondary: '#4f4f4f',
      },
    },
  });

  // Hardcoded matchingTours data with images
  const matchingTours = [
    {
      _id: '672e9c427d943b27c5591198',
      name: 'Culinary Delights of Timișoara',
      description:
        "A tour of Timișoara's finest dining establishments and local markets.",
      tripType: 'Friends Trip',
      categories: ['Great Food', 'Shopping Streets', 'Cafes and Coffee Culture'],
      destinationsKey:
        'CentralMarket|LaCalulAlb|BelvedereRestaurant|FishMarket|CafeClandestino',
      destinations: [
        {
          name: 'Central Market',
          description:
            'A bustling market offering fresh produce and local delicacies.',
          image: 'central_market.jpg',
          location: {
            type: 'Point',
            coordinates: [45.754, 21.225],
          },
          _id: '672e9c427d943b27c5591199',
        },
        {
          name: 'La Calul Alb',
          description: 'A traditional Romanian restaurant with authentic cuisine.',
          image: 'la_calul_alb.jpg',
          location: {
            type: 'Point',
            coordinates: [45.752, 21.2222],
          },
          _id: '672e9c427d943b27c559119a',
        },
        {
          name: 'Belvedere Restaurant',
          description: 'A modern dining experience with a beautiful view.',
          image: 'belvedere_restaurant.jpg',
          location: {
            type: 'Point',
            coordinates: [45.7525, 21.2249],
          },
          _id: '672e9c427d943b27c559119b',
        },
        {
          name: 'Fish Market',
          description: 'Fresh seafood and local fish specialties.',
          image: 'fish_market.jpg',
          location: {
            type: 'Point',
            coordinates: [45.7547, 21.2231],
          },
          _id: '672e9c427d943b27c559119c',
        },
        {
          name: 'Cafe Clandestino',
          description:
            'A hidden cafe with a cozy atmosphere and excellent coffee.',
          image: 'cafe_clandestino.jpg',
          location: {
            type: 'Point',
            coordinates: [45.7562, 21.2278],
          },
          _id: '672e9c427d943b27c559119d',
        },
      ],
    },
    // ... other tours remain unchanged
  ];

  return (
    <ThemeProvider theme={lightTheme}>
      <Box p={4} sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Typography variant="h4" gutterBottom>
          Recommended Tours
        </Typography>
        {matchingTours.length > 0 ? (
          matchingTours.map((tour: any) => (
            <Card
              key={tour._id}
              variant="outlined"
              sx={{
                mb: 4,
                bgcolor: '#005faf',
                color: '#ffffff',
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ color: '#ffffff' }}>
                  {tour.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#e0e0e0' }}
                  paragraph
                >
                  {tour.description}
                </Typography>
                <Grid container spacing={2}>
                  {/* Left Side: Destinations List */}
                  <Grid item xs={12} md={6}>
                    <Box>
                      {tour.destinations.map(
                        (destination: any, index: number) => (
                          <Card
                            key={destination._id}
                            variant="outlined"
                            sx={{
                              display: 'flex',
                              mb: 2,
                              transition: 'all 0.3s',
                              cursor: 'pointer',
                              bgcolor: 'white', // Set background color to white
                              boxShadow: 1, // Add shadow
                              '&:hover': {
                                transform: 'scale(1.05)', // Make the card bigger on hover
                                boxShadow: 3, // Increase shadow on hover
                              },
                              ...(selectedDestinationId === destination._id && {
                                borderColor: '#005faf',
                              }),
                            }}
                            onClick={() =>
                              setSelectedDestinationId(destination._id)
                            }
                          >
                            <CardMedia
                              component="img"
                              sx={{ width: 160 }}
                              image={`/images/${destination.image}`}
                              alt={destination.name}
                            />
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                              }}
                            >
                              <CardContent
                                sx={{
                                  flex: '1 0 auto',
                                  color: '#000000',
                                }}
                              >
                                <Typography component="div" variant="h6">
                                  {`${index + 1}. ${destination.name}`}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  component="div"
                                >
                                  {destination.description}
                                </Typography>
                              </CardContent>
                            </Box>
                          </Card>
                        )
                      )}
                    </Box>
                  </Grid>
                  {/* Right Side: Map */}
                  <Grid item xs={12} md={6}>
                    <MapContainer
                      center={[
                        tour.destinations[0].location.coordinates[0],
                        tour.destinations[0].location.coordinates[1],
                      ]}
                      zoom={13}
                      style={{ height: '100%', minHeight: '400px' }}
                    >
                      <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <MapUpdater
                        destinations={tour.destinations}
                        selectedDestinationId={selectedDestinationId}
                      />
                      <TourMap
                        destinations={tour.destinations}
                        selectedDestinationId={selectedDestinationId}
                      />
                    </MapContainer>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1">No matching tours found.</Typography>
        )}
        <Button
          onClick={() => navigate('/')}
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Go Back to Trip Builder
        </Button>
      </Box>
    </ThemeProvider>
  );
};

interface TourMapProps {
  destinations: any[];
  selectedDestinationId: string | null;
}

const TourMap: React.FC<TourMapProps> = ({
  destinations,
  selectedDestinationId,
}) => {
  const map = useMap();
  const [routingControl, setRoutingControl] = React.useState<any>(null);

  // Create custom numbered icons for each destination
  const numberedIcons = destinations.map((destination: any, index: number) => {
    return new DivIcon({
      html: `
        <div style="position: relative;">
          <img src="${markerIcon}" style="display: block;" />
          <span style="
            position: absolute;
            top: 8px;
            left: 9px;
            color: black;
            font-weight: bold;
            font-size: 12px;
            text-shadow: 1px 1px 2px white;
          ">
            ${index + 1}
          </span>
        </div>
      `,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      className: '',
    });
  });

  // State to control the lines drawn between destinations
  const [visibleLines, setVisibleLines] = React.useState<number>(0);

  // Use effect to animate the drawing of lines
  React.useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    destinations.forEach((_: any, index: number) => {
      const timeoutId = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, index * 1000); // Adjust the delay (in milliseconds) as needed
      timeouts.push(timeoutId);
    });

    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [destinations]);

  // Create an array of line segments
  const lineSegments = [];
  for (let i = 0; i < visibleLines && i < destinations.length - 1; i++) {
    const start = destinations[i].location.coordinates;
    const end = destinations[i + 1].location.coordinates;
    lineSegments.push([
      [start[0], start[1]],
      [end[0], end[1]],
    ]);
  }

  // Function to handle getting directions
  const handleGetDirections = (destinationCoords: [number, number]) => {
    // Check if browser supports geolocation
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords: [number, number] = [
            position.coords.latitude,
            position.coords.longitude,
          ];

          // Remove existing routing control if any
          if (routingControl) {
            map.removeControl(routingControl);
          }
          
          // Create a custom plan with draggableWaypoints set to false
          const plan = new L.Routing.Plan(
            [L.latLng(userCoords), L.latLng(destinationCoords)],
            {
              draggableWaypoints: false,
              addWaypoints: false,
            }
          );
          
          // Create a new routing control
          const control = L.Routing.control({
            plan: plan,
            routeWhileDragging: false,
            lineOptions: {
              styles: [{ color: 'red', weight: 4 }],
              extendToWaypoints: false, // Provide default value
              missingRouteTolerance: 0, // Provide default value
            },
            show: false,
            fitSelectedRoutes: true,
          }).addTo(map);
          
          setRoutingControl(control);
          
          // Fit the map to show the route
          map.fitBounds([userCoords, destinationCoords]);
        },
        (error) => {
          alert('Unable to retrieve your location.');
          console.error(error);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <>
      {/* Draw the animated line segments */}
      {lineSegments.map((positions, index) => (
        <Polyline
          key={index}
          positions={positions}
          color="blue"
          weight={4}
          opacity={0.7}
        />
      ))}
      {/* Render the markers with numbered icons */}
      {destinations.map((destination: any, index: number) => (
        <Marker
          key={destination._id}
          position={[
            destination.location.coordinates[0],
            destination.location.coordinates[1],
          ]}
          icon={numberedIcons[index]}
        >
          <Popup>
            <Typography variant="subtitle1">{`${index + 1}. ${destination.name}`}</Typography>
            <Typography variant="body2">{destination.description}</Typography>
            <Button
              variant="contained"
              size="small"
              onClick={() =>
                handleGetDirections([
                  destination.location.coordinates[0],
                  destination.location.coordinates[1],
                ])
              }
              sx={{ mt: 1 }}
            >
              Get Directions
            </Button>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

interface MapUpdaterProps {
  destinations: any[];
  selectedDestinationId: string | null;
}

const MapUpdater: React.FC<MapUpdaterProps> = ({
  destinations,
  selectedDestinationId,
}) => {
  const map = useMap();

  React.useEffect(() => {
    if (selectedDestinationId) {
      const selectedDestination = destinations.find(
        (dest) => dest._id === selectedDestinationId
      );
      if (selectedDestination) {
        const [lat, lng] = selectedDestination.location.coordinates;
        map.setView([lat, lng], 15, {
          animate: true,
        });
      }
    }
  }, [selectedDestinationId, destinations, map]);

  return null;
};

export default MatchingTours;
