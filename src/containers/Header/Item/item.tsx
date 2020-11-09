import React from 'react';
import { Box, H2, P } from 'quarks-ui';
import { ItemProps } from './item.tytpes';

const Item: React.FC<ItemProps> = (props) => (
    <Box styling="row" width="100%" justifyContent="flex-start" mb="10px">
        <H2
            styling="base"
            fontWeight="normal"
            fontSize="14px"
            mr="15px"
            textAlign="right"
            color="#FFF"
        >
            {props.title}
        </H2>
        <P styling="base" fontWeight="bold" fontSize="14px" color="#FFF">
            {props.description}
        </P>
    </Box>
);

export default Item;
