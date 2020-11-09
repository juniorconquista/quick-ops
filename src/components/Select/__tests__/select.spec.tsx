import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ThemeProvider from '../../../utils/ThemeProviderTest';

import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

import Select from '../select';

describe('Select component', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });
    test('basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Select styling="base" />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });

    it('should inherit the styling properties of the success variant', () => {
        render(
            <ThemeProvider>
                <Select styling="success" />
            </ThemeProvider>,
        );
    });

    it('should inherit the styling properties of the danger variant', () => {
        render(
            <ThemeProvider>
                <Select styling="danger" />
            </ThemeProvider>,
        );
    });
});
