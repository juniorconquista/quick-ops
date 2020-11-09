import React, { ReactNode, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'quarks-ui';

import colors from '../assets/theme/colors';

interface Props {
    children: ReactNode;
}

const ThemeProviderTest: React.FC<Props> = ({ children }) => {
    theme.colors = useMemo(
        () => ({
            ...theme.colors,
            ...colors(true),
        }),
        [],
    );

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderTest;
