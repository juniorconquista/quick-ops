import React, { memo, useEffect } from 'react';
import classnames from 'classnames';
import { Box } from 'quarks-ui';
import styled from 'styled-components';
import { layout, space, variant, VariantArgs } from 'styled-system';

import Status from '../../components/Status';
import Loading from '../../components/Loading';

import useWindowSize from '../../hooks/useWindowSize';
import useAsync from '../../hooks/useAsync';
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
                position: 'relative',
                '&:focus': {
                    outline: 'none',
                },
            },
            '.mobile': {
                top: 48,
                right: '-350px',
                position: 'fixed',
                width: '350px',
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
    const getSidebar = (): Promise<Response> =>
        fetch(`${process.env.REACT_APP_API_URL}/sidebar`);
    const size = useWindowSize();
    const { execute, status } = useAsync<Response>(getSidebar, false);

    // useEffect(() => { execute() }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Style styling="base">
            <div
                className={classnames({
                    content: true,
                    mobile: size.isMobile,
                    open: size.isMobile && props.isOpen,
                })}
            >
                <Box styling="row" p="40px 0px">
                    <Status />
                </Box>
                {status === 'pending' && <Loading />}
            </div>
        </Style>
    );
};

export default memo(Sidebar);
