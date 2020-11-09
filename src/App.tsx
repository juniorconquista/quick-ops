import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'quarks-ui';

import colors from './assets/theme/colors';
import Routes from './routes';
import './assets/style/reset.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props: { theme: { fontFamily: string; color: string } }) =>
        props.theme.fontFamily};
    color: ${(props: { theme: { fontFamily: string; color: string } }) =>
        props.theme.color};
    background-color: ${(props: {
        theme: { fontFamily: string; color: string; bg: string };
    }) => props.theme.bg};
  }
`;

const App: React.FC = () => {
    const [themeMode, setThemeModColor] = useState('light');

    const toggleMode = () => {
        localStorage.setItem('theme', themeMode === 'light' ? 'dark' : 'light');
        setThemeModColor((prevState) =>
            prevState === 'light' ? 'dark' : 'light',
        );
    };

    theme.colors = useMemo(
        () => ({
            ...theme.colors,
            ...colors(themeMode === 'dark'),
        }),
        [themeMode],
    );

    useEffect(() => {
        const themeModeStorage = localStorage.getItem('theme') ?? 'light';
        setThemeModColor(themeModeStorage);
    }, []);

    // @ts-ignore
    theme.breakpoints.desktop = '68rem';
    theme.breakpoints[2] = '68rem';

    return (
        <ThemeProvider
            theme={{
                ...theme,
                toggleTheme: toggleMode,
                fontFamily: 'Nunito Sans, sans-serif',
                color: theme.colors.text.default,
                bg: theme.colors.background.default,
            }}
        >
            <Router basename={process.env.PUBLIC_URL}>
                <Routes />
                <GlobalStyle />
            </Router>
        </ThemeProvider>
    );
};

export default App;
