import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ThemeProvider from '../../../utils/ThemeProviderTest';
import Dispense from '../dispense';
import 'jest-styled-components';

const props = {
    handleDispense: jest.fn(),
};

describe('Dispense container', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('tests basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Dispense {...props} />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });
});
