import React, { memo } from 'react';
import { Box, H1 } from 'quarks-ui';

import Form from './Form';
import { DispenseProps } from './dispense.types';

const Dispense: React.FC<DispenseProps> = (props) => (
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
            p={{ mobile: '0px 15px', tablet: '0px 15px', desktop: '0px 48px' }}
            pt={{ mobile: '15px', tablet: '15px', desktop: '24px' }}
        >
            Nova despesa
        </H1>
        <Form handleDispense={props.handleDispense} />
    </Box>
);

export default memo(Dispense);
