import React, { memo } from 'react';
import { Box } from 'quarks-ui';

import Status from '../../components/Status';

const Sidebar: React.FC = () => (
    <Box styling="row" p="40px 23px">
        <Status />
    </Box>
);

export default memo(Sidebar);
