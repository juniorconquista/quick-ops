import React, { memo, useEffect } from 'react';
import { Box } from 'quarks-ui';

import handlerFactory from './timeline.handleFactory';
import { CARDTYPE, TimelineProps } from './timeline.types';
import useAsync, { headers } from '../../hooks/useAsync';
import Loading from '../../components/Loading';

const Timeline: React.FC = () => {
    const getTimeline = (): Promise<TimelineProps> =>
        fetch(`${process.env.REACT_APP_API_URL}/timeline`, {
            headers,
        }).then((response) => response.json());

    const { execute, value, status } = useAsync<TimelineProps>(
        getTimeline,
        false,
    );

    useEffect(() => {
        execute();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box styling="column" width="100%" mt="24px">
            {value?.content?.map((card) => {
                const CardComponent = handlerFactory(card.cardType as CARDTYPE);
                return <CardComponent key={card.id} {...card} />;
            })}
            {status === 'pending' && (
                <Box styling="row" height="250px" position="relative">
                    <Loading />
                </Box>
            )}
        </Box>
    );
};

export default memo(Timeline);
