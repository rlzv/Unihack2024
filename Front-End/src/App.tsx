import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import TripBuilder from './components/TripBuilder';
import TourSelectionPage from './components/TourSelectionPage.tsx';
import MatchingTours from './components/MatchingTours';
import LandingPage from './LandingPage';
import ContactUs from './ContactUs.tsx'
import UserProfile from './UserInterface.tsx'

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />} />
            <Route path="/create-tour" element={<TripBuilder isAuthenticated={isAuthenticated} />} />
            <Route path="/matching-tours" element={<MatchingTours />} />
            <Route path="/tours" element={<TourSelectionPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
    );
};

export default App;
