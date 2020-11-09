import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import ThemeProvider from '../../../utils/ThemeProviderTest';

import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

import Input from '../input';

describe('Input component', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });
    test('basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Input styling="base" name="test" />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });

    it('should inherit the styling properties of the success variant', () => {
        const input = renderer
            .create(
                <ThemeProvider>
                    <Input styling="success" name="test" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(input).toHaveStyleRule('color', '#51c1c3', {
            modifier: 'label',
        });
        expect(input).toHaveStyleRule('color', '#51c1c3', {
            modifier: 'input',
        });
        expect(input).toHaveStyleRule('border-color', '#51c1c3', {
            modifier: 'input',
        });
    });

    it('should inherit the styling properties of the danger variant', () => {
        const input = renderer
            .create(
                <ThemeProvider>
                    <Input styling="danger" name="test" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(input).toHaveStyleRule('color', '#ff4138', {
            modifier: 'label',
        });
        expect(input).toHaveStyleRule('color', '#ff4138', {
            modifier: 'input',
        });
        expect(input).toHaveStyleRule('border-color', '#ff4138', {
            modifier: 'input',
        });
    });
});
