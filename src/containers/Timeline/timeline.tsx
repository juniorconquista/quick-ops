import React, { memo, useEffect } from 'react';
import { Box } from 'quarks-ui';

import handlerFactory from './timeline.handleFactory';
import { CARDTYPE, TimelineProps } from './timeline.types';
import useAsync from '../../hooks/useAsync';

const Timeline: React.FC = () => {
    const getTimeline = (): Promise<TimelineProps> =>
        fetch(`${process.env.REACT_APP_API_URL}/timeline`).then((response) =>
            response.json(),
        );
    const { execute, value } = useAsync<TimelineProps>(getTimeline, false);

    // useEffect(() => { execute() }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box styling="column" width="100%" mt="24px">
            {value?.content.map((card) => {
                const CardComponent = handlerFactory(card.cardType as CARDTYPE);
                return <CardComponent key={card.id} {...card} />;
            })}
        </Box>
    );
};

export default memo(Timeline);
