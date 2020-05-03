import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
            <div className="error">
                <div className='error-child'>
                    <h2> 404 Error!</h2>
                    <h3>Page not found! </h3>
                 </div>
            </div>
    );
};

export default NotFound;