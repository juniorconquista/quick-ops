import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ThemeProvider from '../../../../utils/ThemeProviderTest';
import Accountability from '../accountability';
import 'jest-styled-components';

describe('Accountability component', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('tests basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Accountability />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });
});
