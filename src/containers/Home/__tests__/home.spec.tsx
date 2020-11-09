import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ThemeProvider from '../../../utils/ThemeProviderTest';
import Home from '../home';
import 'jest-styled-components';

describe('Home container', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('tests basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Home />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });
});
