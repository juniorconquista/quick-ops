import React, { memo } from 'react';
import { Box, H1, H2 } from 'quarks-ui';

const Status: React.FC = () => (
    <Box
        styling="column"
        minHeight="86px"
        width="80%"
        minWidth="250px"
        border="1px solid"
        borderRadius="6px"
        borderColor="#009d43"
        bg="#edfff5"
        p="0px 32px"
    >
        <H1 styling="light" color="#009d43" fontSize="16px" mb="8px">
            Status
        </H1>
        <H2 styling="base" color="#009d43" fontSize="20px" fontWeight="bold">
            Concluído
        </H2>
    </Box>
);

export default memo(Status);
