import React, { memo } from 'react';
import { Box, H1, H2 } from 'quarks-ui';

const Status: React.FC = () => (
    <Box
        styling="column"
        minHeight="86px"
        width="319px"
        border="1px solid"
        borderRadius="6px"
        borderColor="#6b7480"
        bg="#f0f3f7"
    >
        <H1 styling="light" color="#053d4e" fontSize="16px" mb="8px">
            Status
        </H1>
        <H2 styling="base" color="#053d4e" fontSize="24px" fontWeight="bold">
            Aguardando financeiro
        </H2>
    </Box>
);

export default memo(Status);
