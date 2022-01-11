import React from 'react';
import { Link } from 'gatsby'; // gatsby links for perserving state

const PageNotFound = () => {
    return (
        <React.Fragment>
            <h1>Page Not Found</h1>
            <Link to='/'>Go back home</Link>
        </React.Fragment>
    );
};

export default PageNotFound;
