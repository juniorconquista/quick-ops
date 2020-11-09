import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import ThemeProvider from '../../../utils/ThemeProviderTest';

import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

import Button from '../button';

describe('Button component', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });
    test('basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Button styling="base" />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });

    it('should inherit the styling properties of the success variant', () => {
        const button = renderer
            .create(
                <ThemeProvider>
                    <Button styling="success" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(button).toHaveStyleRule('border-color', '#51c1c3');
        expect(button).toHaveStyleRule('color', '#FFFFFF');
        expect(button).toHaveStyleRule('background-color', '#51c1c3');
        expect(button).toHaveStyleRule('box-shadow', '0 0 2px 3px #51c1c390', {
            modifier: '&:hover',
        });
        expect(button).toHaveStyleRule('box-shadow', '0 0 2px 3px #51c1c390', {
            modifier: '&:focus',
        });
        expect(button).toHaveStyleRule('fill', '#FFFFFF', {
            modifier: 'svg',
        });
    });

    it('should inherit the styling properties of the danger variant', () => {
        const button = renderer
            .create(
                <ThemeProvider>
                    <Button styling="danger" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(button).toHaveStyleRule('border-color', '#ff4138');
        expect(button).toHaveStyleRule('color', '#FFFFFF');
        expect(button).toHaveStyleRule('background-color', '#ff4138');
        expect(button).toHaveStyleRule('box-shadow', '0 0 2px 3px #ff413890', {
            modifier: '&:hover',
        });
        expect(button).toHaveStyleRule('box-shadow', '0 0 2px 3px #ff413890', {
            modifier: '&:focus',
        });
        expect(button).toHaveStyleRule('fill', '#FFFFFF', {
            modifier: 'svg',
        });
    });
});
