import React, { memo } from 'react';
import { Box, H1, H2 } from 'quarks-ui';

const Status: React.FC = () => (
    <Box
        styling="column"
        minHeight="86px"
        width="100%"
        border="1px solid"
        borderRadius="6px"
        borderColor="#6b7480"
        bg="#f0f3f7"
        p="0px 32px"
    >
        <H1 styling="light" color="#053d4e" fontSize="16px" mb="8px">
            Status
        </H1>
        <H2 styling="base" color="#053d4e" fontSize="20px" fontWeight="bold">
            Aguardando financeiro
        </H2>
    </Box>
);

export default memo(Status);
