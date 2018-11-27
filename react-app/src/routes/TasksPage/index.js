import React from 'react';
import Tasks from "../../components/Tasks";
import Layout from '../../components/Layout';

const TasksPage = (props) => (
    <Layout location={props.location}>
        <Tasks/>
    </Layout>
);

export default TasksPage;