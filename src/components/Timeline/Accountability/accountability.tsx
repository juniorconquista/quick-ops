import React, { memo, useMemo } from 'react';
import { Box, H2, H1 } from 'quarks-ui';
import { css } from 'styled-components';

import { Card } from '../../../containers/Timeline/timeline.types';
import { formatDate, handleIcon } from '../timeline.utils';
import Icon from '../Icon';
import Status from '../Status';

const Accountability: React.FC<Card & any> = (props) => {
    const AccountabilityIcon = useMemo(() => handleIcon('accountability'), []);
    return (
        <Box
            styling="row"
            bg="white.default"
            width="100%"
            mb="24px"
            minHeight="154px"
            p={{ mobile: '20px', tablet: '20px 30px', desktop: '20px 40px' }}
            alignItems="stretch"
            justifyContent="space-between"
        >
            <Box
                styling="row"
                width="70%"
                css={css({
                    '@media (max-width: 1250px)': {
                        width: '80%',
                    },
                })}
                flexDirection={{
                    mobile: 'column',
                    tablet: 'row',
                    desktop: 'row',
                }}
                justifyContent="flex-start"
                alignItems={{
                    mobile: 'flex-start',
                    tablet: 'center',
                    desktop: 'center',
                }}
            >
                <Box
                    styling="column"
                    mr={{ mobile: '0px', tablet: '40px', desktop: '40px' }}
                    mb={{ mobile: '15px', tablet: '15px', desktop: '0px' }}
                    flexDirection={{
                        row: 'row',
                        tablet: 'column',
                        desktop: 'column',
                    }}
                >
                    <Icon styling={props.cardType ?? 'base'}>
                        <AccountabilityIcon />
                    </Icon>
                    <H2
                        styling="base"
                        fontSize="13px"
                        ml={{ mobile: '5px', tablet: '0px', desktop: '0px' }}
                    >
                        {formatDate(props.cardDate)}
                    </H2>
                </Box>
                <Box
                    styling="column"
                    alignItems="flex-start"
                    mr={{ mobile: '0px', tablet: '0px', desktop: '15px' }}
                    mb={{ mobile: '10px', tablet: '0px', desktop: '0px' }}
                    flexDirection={{
                        row: 'row',
                        tablet: 'column',
                        desktop: 'column',
                    }}
                >
                    <H1
                        styling="base"
                        fontWeight="bold"
                        fontSize={{
                            mobile: '14px',
                            tablet: '11px',
                            desktop: '11px',
                        }}
                        mb={{ mobile: '0px', tablet: '10px', desktop: '10px' }}
                        mr={{ mobile: '5px', tablet: '0px', desktop: '0px' }}
                    >
                        TIPO
                    </H1>
                    <H2
                        styling="base"
                        fontWeight="bold"
                        color="text.contrast"
                        fontSize={{
                            mobile: '14px',
                            tablet: '20x',
                            desktop: '20x',
                        }}
                        mb={{ mobile: '0px', tablet: '10px', desktop: '10px' }}
                        mr={{ mobile: '5px', tablet: '0px', desktop: '0px' }}
                    >
                        {`Solicitação concluída por ${props?.author.name}`}
                    </H2>
                </Box>
                {props.status && (
                    <Box
                        styling="column"
                        alignItems="flex-start"
                        flexDirection={{
                            row: 'row',
                            tablet: 'column',
                            desktop: 'column',
                        }}
                    >
                        <H1
                            styling="base"
                            fontSize="11px"
                            fontWeight="bold"
                            mb="10px"
                        >
                            STATUS
                        </H1>
                        <Status styling={props?.status ?? 'base'}>
                            {props?.status}
                        </Status>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default memo(Accountability);
