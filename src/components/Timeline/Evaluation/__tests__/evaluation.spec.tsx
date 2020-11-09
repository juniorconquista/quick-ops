import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ThemeProvider from '../../../../utils/ThemeProviderTest';
import Evaluation from '../evaluation';
import 'jest-styled-components';

describe('Evaluation component', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('tests basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Evaluation />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });
});
