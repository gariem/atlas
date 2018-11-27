import React from 'react';
import Layout from '../../components/Layout';
import Dashboard from '../../components/Dashboard';

const HomePage = (props) => (
    <Layout location={props.location}>
        <Dashboard/>
    </Layout>
);

export default HomePage;