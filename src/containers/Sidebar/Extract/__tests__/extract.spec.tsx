import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ThemeProvider from '../../../../utils/ThemeProviderTest';
import Extract from '../extract';
import 'jest-styled-components';

const props = {
    // isOpen: false
    currencySymbol: 'R$',
    declared: 10,
    approved: 20,
};

describe('Extract container', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('tests basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Extract {...props} />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });
});
