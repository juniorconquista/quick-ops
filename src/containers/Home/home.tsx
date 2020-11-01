import React from 'react';
import { Box } from 'quarks-ui';

import Breadcrumb from '../../components/Breadcrumb';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Home: React.FC = () => (
    <Box
        styling="column"
        minHeight="calc(100vh - 48px)"
        justifyContent="flex-start"
    >
        <Breadcrumb />
        <Box
            styling="grid"
            minHeight="calc(100vh - 48px)"
            width="100%"
            gridTemplateColumns="calc(100% - 393px) 393px"
        >
            <Box
                styling="column"
                minHeight="100%"
                padding="24px 54px"
                justifyContent="flex-start"
            >
                <Header />
            </Box>
            <Box
                styling="column"
                minHeight="100%"
                justifyContent="flex-start"
                bg="white.default"
            >
                <Sidebar />
            </Box>
        </Box>
    </Box>
);

export default Home;
