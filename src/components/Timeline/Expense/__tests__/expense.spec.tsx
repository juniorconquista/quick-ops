import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ThemeProvider from '../../../../utils/ThemeProviderTest';
import Expense from '../expense';
import 'jest-styled-components';

describe('Expense component', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('tests basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Expense />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });
});
