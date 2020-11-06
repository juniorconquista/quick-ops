import React, { memo, useEffect } from 'react';
import { Box } from 'quarks-ui';
import { css } from 'styled-components';

// import useStore from '../../hooks/useStore';
import { isLoadingAction } from '../../store/context/header/action';

const Header: React.FC = () => {
    // const {  } = useStore();

    // const logoutHandler = () => dispatch(isLoadingAction(true));

    useEffect(() => {
        // dispatch(isLoadingAction(true))
    }, []);

    // console.log('header', header);

    return (
        <Box
            styling="row"
            bg="#FFF"
            width="100%"
            borderRadius="12px"
            height="226px"
            css={css({
                backgroundImage:
                    'linear-gradient(to right, #00d7ce 3%, #00c5fc)',
            })}
        >
            Header
        </Box>
    );
};

export default memo(Header);
