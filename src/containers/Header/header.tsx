import React, { memo, useEffect } from 'react';
import { Box, H1, H2 } from 'quarks-ui';
import { css } from 'styled-components';

import useAsync from '../../hooks/useAsync';
import Loading from '../../components/Loading';
import { HeaderResponse } from './header.types';
import Item from './Item';
import Select from '../../components/Select';

const Header: React.FC = () => {
    const getHeader = (): Promise<HeaderResponse> =>
        fetch(`${process.env.REACT_APP_API_URL}/header`).then((response) =>
            response.json(),
        );

    const { execute, status, value } = useAsync<HeaderResponse>(
        getHeader,
        false,
    );

    // useEffect(() => { execute() }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box
            styling="column"
            position="relative"
            width="100%"
            borderRadius="12px"
            minHeight="236px"
            p="24px 30px"
            justifyContent="space-between"
            alignItems="flex-start"
            css={css({
                backgroundImage:
                    'linear-gradient(to right, #00d7ce 3%, #00c5fc)',
            })}
        >
            <H1 styling="base" fontWeight="bold" fontSize="20px" color="#FFF">
                {value?.project.title ?? '-'}
            </H1>
            <Box
                styling="grid"
                width="100%"
                minHeight="150px"
                gridGap="10px"
                gridTemplateColumns="repeat(3, 1fr)"
                css={css({
                    '@media (max-width: 1200px)': {
                        gridTemplateColumns: 'repeat(1, 1fr)',
                    },
                })}
            >
                <Box
                    styling="column"
                    height="100%"
                    borderRight="solid 1px #fafbfc"
                    p="10px 0px"
                    css={css({
                        '@media (max-width: 1200px)': {
                            borderRight: 'none',
                            borderBottom: 'solid 1px #fafbfc',
                            paddingBottom: '0px',
                        },
                    })}
                >
                    <Item
                        title="Name"
                        description={value?.collaborator.name ?? '-'}
                    />
                    <Item
                        title="Email"
                        description={value?.collaborator.email ?? '-'}
                    />
                    <Item
                        title="Justificativa"
                        description={value?.justification ?? '-'}
                    />
                    <Item
                        title="Finalidade"
                        description={value?.purpose ?? '-'}
                    />
                </Box>
                <Box
                    styling="column"
                    height="100%"
                    borderRight="solid 1px #fafbfc"
                    p="10px 0px"
                    css={css({
                        '@media (max-width: 1200px)': {
                            borderRight: 'none',
                            borderBottom: 'solid 1px #fafbfc',
                            padding: '0px',
                        },
                    })}
                >
                    {value?.costCenters.map((costCenter) => (
                        <Item
                            key={costCenter.id}
                            title="Centro de custo"
                            description={costCenter?.name ?? '-'}
                        />
                    ))}
                    <Item
                        title="Projeto"
                        description={value?.project.title ?? '-'}
                    />
                    <Item
                        title="Data"
                        description={
                            value?.accountabilityExtraInfo.eventDate ?? '-'
                        }
                    />
                </Box>
                <Box
                    styling="column"
                    height="100%"
                    p="10px 0px"
                    css={css({
                        '@media (max-width: 1200px)': {
                            borderRight: 'none',
                            padding: '0px',
                        },
                    })}
                >
                    <Item
                        title="Quantiade"
                        description={`${
                            value?.accountabilityExtraInfo.amountOfPeople ?? '-'
                        }`}
                    />
                    <Item
                        title="Inclui café da manhã"
                        description={`${
                            value?.accountabilityExtraInfo.budgetForBreakfast
                                ? 'Sim'
                                : 'Não'
                        }`}
                    />
                    {value?.analyst && (
                        <Box
                            styling="column"
                            width="100%"
                            alignItems="flex-start"
                        >
                            <H2
                                styling="base"
                                fontWeight="normal"
                                fontSize="14px"
                                mr="15px"
                                textAlign="right"
                                color="#FFF"
                                mb="5px"
                            >
                                Atribuir analista
                            </H2>
                            <Select
                                styling="base"
                                placeholder="Selecione"
                                options={[]}
                                name="analyst"
                                bg="#FFF"
                            />
                        </Box>
                    )}
                </Box>
            </Box>
            {status === 'pending' && <Loading />}
        </Box>
    );
};

export default memo(Header);
