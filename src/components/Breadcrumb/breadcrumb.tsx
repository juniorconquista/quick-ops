import React, { memo } from 'react';
import { Box, P } from 'quarks-ui';
import useTheme from 'quarks-ui/lib/hooks/useTheme';

import { ReactComponent as Menu } from '../../assets/icons/menu.svg';
import Toggle from '../Toggle';
import { BreadcrumbProps } from './breadcrumb.types';

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
    const theme = useTheme();
    return (
        <Box
            styling="row"
            height="48px"
            width="100%"
            bg="background.contrast"
            justifyContent="space-between"
            p={{ tablet: '12px', desktop: '12px 28px' }}
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
                    mr="15px"
                    onClick={theme.toggleTheme}
                    checked={theme.colors.dark}
                    iconCheck="🌞"
                    iconX="🌜"
                />
                <Box
                    styling="row"
                    display={{ tablet: 'flex', desktop: 'none' }}
                >
                    <button onClick={props.handleSidebar}>
                        <Menu height="24px" width="24px" />
                    </button>
                </Box>
            </Box>
        </Box>
    );
};

export default memo(Breadcrumb);
