import React from 'react';
import { Provider } from './src/state';
import Layout from './src/layout';

export const wrapRootElement = ({ element }) => {
    return <Provider>{element}</Provider>;
};

export const wrapPageElement = ({ element }) => {
    return <Layout>{element}</Layout>;
};
