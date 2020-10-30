import React from 'react';
import { Box } from 'quarks-ui';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Timeline from '../Timeline';

const Home: React.FC = () => (
    <Box styling="column" minHeight="100vh" justifyContent="flex-start">
        <Header />
        <Sidebar />
        <Timeline />
    </Box>
);

export default Home;
