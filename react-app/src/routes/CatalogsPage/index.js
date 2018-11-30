import React from 'react';
import Layout from '../../components/Layout';
import Catalog from "../../components/Catalog";

const CatalogsPage = (props) => (
    <Layout location={props.location}>
        <Catalog/>
    </Layout>
);

export default CatalogsPage;