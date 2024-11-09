import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;
