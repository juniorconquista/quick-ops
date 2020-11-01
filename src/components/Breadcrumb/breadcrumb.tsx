import React, { memo } from 'react';
import { Box, P } from 'quarks-ui';
import useTheme from 'quarks-ui/lib/hooks/useTheme';

import Toggle from '../Toggle';

const Breadcrumb: React.FC = () => {
    const theme = useTheme();
    return (
        <Box
            styling="row"
            height="48px"
            width="100%"
            bg="background.default"
            justifyContent="space-between"
            p="12px 48px"
        >
            <Box styling="row">
                <P styling="base" color="primary.default">
                    Dashboard /
                </P>
                <P styling="base" color="primary.default" ml="4px">
                    QuickOps
                </P>
                <P styling="base" ml="4px">
                    / Current
                </P>
            </Box>
            <Box styling="row">
                <Toggle
                    styling="base"
                    onClick={theme.toggleTheme}
                    checked={theme.colors.dark}
                />
            </Box>
        </Box>
    );
};

export default memo(Breadcrumb);
