import React, { useState } from 'react';
import { Box } from 'quarks-ui';

import Breadcrumb from '../../components/Breadcrumb';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Home: React.FC = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const handleSidebar = () => setIsOpenSidebar((prevState) => !prevState);

    return (
        <Box
            styling="column"
            minHeight="calc(100vh - 48px)"
            justifyContent="flex-start"
        >
            <Breadcrumb handleSidebar={handleSidebar} />
            <Box
                styling="grid"
                minHeight="calc(100vh - 48px)"
                width="100%"
                gridTemplateColumns={{
                    mobile: '100%',
                    tablet: '100%',
                    desktop: 'calc(100% - 393px) 393px',
                }}
            >
                <Box
                    styling="column"
                    minHeight="100%"
                    padding="24px 54px"
                    justifyContent="flex-start"
                    p={{ mobile: '12px', tablet: '24px', desktop: '24px 54px' }}
                >
                    <Header />
                </Box>
                <Sidebar isOpen={isOpenSidebar} />
            </Box>
        </Box>
    );
};

export default Home;
