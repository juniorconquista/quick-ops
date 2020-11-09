import React, { memo, useEffect } from 'react';
import classnames from 'classnames';
import { Box, H1, H2 } from 'quarks-ui';
import styled from 'styled-components';
import { layout, space, variant, VariantArgs } from 'styled-system';

import { ReactComponent as Arrow } from '../../assets/icons/up-arrow.svg';
import Status from '../../components/Status';
import Loading from '../../components/Loading';
import useWindowSize from '../../hooks/useWindowSize';
import useAsync, { headers } from '../../hooks/useAsync';

import {
    SidebarProps,
    SidebarResponse,
    SidebarStyledProps,
} from './sidebar.types';
import Svg from '../../components/Svg';
import Extract from './Extract';

/* TODO This component was created in the local repository as it has not yet been 
implemented in lib Quarks UI, however in the future it can be changed to be used directly from lib. */

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            height: '100%',
            '.content': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                minHeight: 'calc(100vh - 48px)',
                height: '100%',
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
                overflow: 'auto',
                minHeight: 'inherit',
                paddingBottom: '30px',
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
    const getSidebar = (): Promise<SidebarResponse> =>
        fetch(`${process.env.REACT_APP_API_URL}/sidebar`, {
            headers,
        }).then((response) => response.json());

    const size = useWindowSize();
    const { execute, status, value } = useAsync<SidebarResponse>(
        getSidebar,
        false,
    );

    useEffect(() => {
        execute();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Style styling="base">
            <div
                className={classnames({
                    content: true,
                    mobile: size.isMobile,
                    open: size.isMobile && props.isOpen,
                })}
            >
                <Box styling="column" p="40px 0px" width="100%">
                    <Status />
                    {value?.content?.map((account, index) => (
                        <Box
                            key={`${account.updatedOn} - ${index}`}
                            styling="column"
                            mt="30px"
                            width="100%"
                        >
                            <H2 styling="base" fontSize="14px">
                                VALOR A RECEBER
                            </H2>
                            <H1
                                styling="base"
                                color="text.contrast"
                                fontWeight="bold"
                                fontSize="24px"
                                pt="10px"
                            >
                                {`${account.currency.symbol} ${account.balance}`}
                            </H1>
                            <Box
                                styling="row"
                                height="1px"
                                width="150px"
                                border="solid 1px #dfe2e6"
                                m="24px 0px"
                                opacity=".6"
                            />
                            <Box styling="row">
                                <Box styling="row">
                                    <Svg styling="base" mr="15px">
                                        <Arrow height="20px" width="20px" />
                                    </Svg>
                                    <Box
                                        styling="column"
                                        alignItems="flex-start"
                                    >
                                        <H2
                                            styling="base"
                                            fontSize="12px"
                                            mb="5px"
                                        >
                                            Gastou
                                        </H2>
                                        <H1
                                            styling="base"
                                            color="text.contrast"
                                            fontWeight="normal"
                                            fontSize="14px"
                                        >
                                            {`${account.currency.symbol} ${account.returned}`}
                                        </H1>
                                    </Box>
                                    <Box
                                        styling="row"
                                        height="30px"
                                        width="1px"
                                        border="solid 1px #dfe2e6"
                                        m="0px 15px"
                                        opacity=".6"
                                    />
                                    <Svg styling="base" mr="15px">
                                        <Arrow height="20px" width="20px" />
                                    </Svg>
                                    <Box
                                        styling="column"
                                        alignItems="flex-start"
                                    >
                                        <H2
                                            styling="base"
                                            fontSize="12px"
                                            mb="5px"
                                        >
                                            Recebeu
                                        </H2>
                                        <H1
                                            styling="base"
                                            color="text.contrast"
                                            fontWeight="normal"
                                            fontSize="14px"
                                        >
                                            {`${account.currency.symbol} ${account.received}`}
                                        </H1>
                                    </Box>
                                </Box>
                            </Box>
                            <Extract
                                currencySymbol={account.currency.symbol}
                                declared={account.declared}
                                approved={account.approved}
                            />
                        </Box>
                    ))}
                </Box>
                {status === 'pending' && <Loading />}
            </div>
        </Style>
    );
};

export default memo(Sidebar);
