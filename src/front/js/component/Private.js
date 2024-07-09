import React from 'react';
import axios from 'axios';

const Private = () => {
    // Check if user is authenticated
    const checkAuth = async () => {
        try {
            await axios.get('/api/private');
        } catch (error) {
            window.location.href = '/login';
        }
    };

    React.useEffect(() => {
        checkAuth();
    }, []);

    return (
        <div>
            <h2>Private Page</h2>
            <p>This page is only accessible to authenticated users.</p>
        </div>
    );
};

export default Private;