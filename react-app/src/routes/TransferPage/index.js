import React from 'react';
import Layout from "../../components/Layout";
import Transfer from "../../components/Transfer";

const TransferPage = (props) => {
    return (
        <Layout location={props.location}>
            <Transfer/>
        </Layout>
    )
}

export default TransferPage;