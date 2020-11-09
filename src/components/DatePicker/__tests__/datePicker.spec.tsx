import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ThemeProvider from '../../../utils/ThemeProviderTest';

import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

import DatePicker from '../datePicker';

const props = {
    onChange: jest.fn(),
};

describe('DatePicker component', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });
    test('basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <DatePicker styling="base" {...props} />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });

    it('should inherit the styling properties of the success variant', () => {
        render(
            <ThemeProvider>
                <DatePicker styling="success" {...props} />
            </ThemeProvider>,
        );
    });

    it('should inherit the styling properties of the danger variant', () => {
        render(
            <ThemeProvider>
                <DatePicker styling="danger" {...props} />
            </ThemeProvider>,
        );
    });
});
