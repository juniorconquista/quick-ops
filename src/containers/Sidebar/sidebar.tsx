import React, { memo } from 'react';
import classnames from 'classnames';
import { Box } from 'quarks-ui';
import styled from 'styled-components';
import { layout, space, variant, VariantArgs } from 'styled-system';

import Status from '../../components/Status';
import useWindowSize from '../../hooks/useWindowSize';
import { SidebarProps, SidebarStyledProps } from './sidebar.types';

/* TODO This component was created in the local repository as it has not yet been 
implemented in lib Quarks UI, however in the future it can be changed to be used directly from lib. */

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            '.content': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                minHeight: 'calc(100vh - 48px)',
                bg: 'white.default',
                transition: 'right .25s ease',
                '&:focus': {
                    outline: 'none',
                },
            },
            '.mobile': {
                top: 48,
                right: '-393px',
                position: 'fixed',
            },
            '.mobile.open': {
                right: '0',
            },
        },
    },
} as VariantArgs);

const Style: React.FC<SidebarStyledProps> = styled.div<SidebarStyledProps>`
    ${variants}
    ${space}
    ${layout}
`;

const Sidebar: React.FC<SidebarProps> = (props) => {
    const size = useWindowSize();
    return (
        <Style styling="base">
            <div
                className={classnames({
                    content: true,
                    mobile: size.isMobile,
                    open: size.isMobile && props.isOpen,
                })}
            >
                <Box styling="row" p="40px 23px">
                    <Status />
                </Box>
            </div>
        </Style>
    );
};

export default memo(Sidebar);
