import React, { memo } from 'react';
import { Box, H1 } from 'quarks-ui';

import Form from './Form';

const Dispense: React.FC = () => (
    <Box
        styling="column"
        minHeight="439px"
        width="100%"
        borderRadius="6px"
        bg="white.contrast"
        mt="24px"
        justifyContent="flex-start"
        alignItems="flex-start"
    >
        <H1
            styling="base"
            color="text.contrast"
            fontWeight="bold"
            fontSize={20}
            mb="12px"
            p="0px 48px"
            pt="24px"
        >
            Nova despesa
        </H1>
        <Form />
    </Box>
);

export default memo(Dispense);
