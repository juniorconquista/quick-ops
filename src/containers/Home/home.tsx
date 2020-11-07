import React, { useState } from 'react';
import { Box } from 'quarks-ui';

import { ReactComponent as Notes } from '../../assets/icons/notes.svg';
import { ReactComponent as Notepad } from '../../assets/icons/notepad.svg';

import Breadcrumb from '../../components/Breadcrumb';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Dispense from '../Dispense';
import Button from '../../components/Button';
import Timeline from '../Timeline';

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
                    desktop: 'calc(100% - 350px) 350px',
                }}
            >
                <Box
                    styling="column"
                    minHeight="100%"
                    padding="24px 54px"
                    justifyContent="flex-start"
                    p={{ mobile: '15px', tablet: '24px', desktop: '24px 54px' }}
                >
                    <Header />
                    <Box
                        styling="row"
                        mt="20px"
                        width="100%"
                        justifyContent="flex-end"
                    >
                        <Button
                            styling="base"
                            mr="10px"
                            text="Inserir notas em lote"
                            icon={<Notepad />}
                        />
                        <Button
                            styling="base"
                            text="Nova despesa"
                            icon={<Notes />}
                        />
                    </Box>
                    <Dispense />
                    <Timeline />
                </Box>
                <Sidebar isOpen={isOpenSidebar} />
            </Box>
        </Box>
    );
};

export default Home;
