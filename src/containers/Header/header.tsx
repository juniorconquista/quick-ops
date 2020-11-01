import React, { memo } from 'react';
import { Box } from 'quarks-ui';
import { css } from 'styled-components';

const Header: React.FC = () => (
    <Box
        styling="row"
        bg="#FFF"
        width="100%"
        borderRadius="12px"
        height="226px"
        css={css({
            backgroundImage: 'linear-gradient(to right, #00d7ce 3%, #00c5fc)',
        })}
    >
        Header
    </Box>
);

export default memo(Header);
