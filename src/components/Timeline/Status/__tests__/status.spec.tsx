import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import ThemeProvider from '../../../../utils/ThemeProviderTest';

import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

import Status from '../status';

describe('Status component', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });
    test('basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Status styling="base" />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });

    it('should inherit the styling properties of the Pending variant', () => {
        const status = renderer
            .create(
                <ThemeProvider>
                    <Status styling="PENDING" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(status).toHaveStyleRule('border', '1px solid #6b7480');
        expect(status).toHaveStyleRule('color', '#6b7480');
        expect(status).toHaveStyleRule('background-color', '#f0f3f7');
    });

    it('should inherit the styling properties of the Refused variant', () => {
        const status = renderer
            .create(
                <ThemeProvider>
                    <Status styling="REFUSED" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(status).toHaveStyleRule('border-color', '#bd0f0f');
        expect(status).toHaveStyleRule('color', '#bd0f0f');
        expect(status).toHaveStyleRule('background-color', '#fde7e7');
    });

    it('should inherit the styling properties of the Approved variant', () => {
        const status = renderer
            .create(
                <ThemeProvider>
                    <Status styling="APPROVED" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(status).toHaveStyleRule('border-color', '#03a046');
        expect(status).toHaveStyleRule('color', '#03a046');
        expect(status).toHaveStyleRule('background-color', '#e6fff0');
    });
});
