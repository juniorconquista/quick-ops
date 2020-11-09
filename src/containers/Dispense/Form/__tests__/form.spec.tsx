import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ThemeProvider from '../../../../utils/ThemeProviderTest';
import Form from '../form';
import 'jest-styled-components';

const props = {
    handleDispense: jest.fn(),
};

describe('Dispense Form container', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('tests basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Form {...props} />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });
});
