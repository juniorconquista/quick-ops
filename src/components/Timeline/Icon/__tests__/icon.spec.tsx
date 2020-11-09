import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import ThemeProvider from '../../../../utils/ThemeProviderTest';

import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

import Icon from '../icon';

describe('Icon component', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });
    test('basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Icon styling="base" />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });

    it('should inherit the styling properties of the hotel-fee variant', () => {
        const icon = renderer
            .create(
                <ThemeProvider>
                    <Icon styling="hotel-fee" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(icon).toHaveStyleRule('background-color', '#e7f2fd');
        expect(icon).toHaveStyleRule('fill', '#0f68bd', {
            modifier: 'svg',
        });
    });

    it('should inherit the styling properties of the food variant', () => {
        const icon = renderer
            .create(
                <ThemeProvider>
                    <Icon styling="food" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(icon).toHaveStyleRule('background-color', '#fde7e7');
        expect(icon).toHaveStyleRule('fill', '#bd0f0f', {
            modifier: 'svg',
        });
    });

    it('should inherit the styling properties of EVALUATION variant', () => {
        const icon = renderer
            .create(
                <ThemeProvider>
                    <Icon styling="EVALUATION" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(icon).toHaveStyleRule('background-color', '#f3e7fd');
        expect(icon).toHaveStyleRule('fill', '#660fbd', {
            modifier: 'svg',
        });
    });

    it('should inherit the styling properties of ACCOUNTABILITY_SUBMITTED variant', () => {
        const icon = renderer
            .create(
                <ThemeProvider>
                    <Icon styling="ACCOUNTABILITY_SUBMITTED" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(icon).toHaveStyleRule('background-color', '#ecf8f8');
        expect(icon).toHaveStyleRule('fill', '#03a046', {
            modifier: 'svg',
        });
        expect(icon).toHaveStyleRule('width', '20px', {
            modifier: 'svg',
        });
        expect(icon).toHaveStyleRule('height', '20px', {
            modifier: 'svg',
        });
    });

    it('should inherit the styling properties of ACCOUNTABILITY_CREATED variant', () => {
        const icon = renderer
            .create(
                <ThemeProvider>
                    <Icon styling="ACCOUNTABILITY_CREATED" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(icon).toHaveStyleRule('background-color', '#fdf8e7');
        expect(icon).toHaveStyleRule('fill', '#bd6b0f', {
            modifier: 'svg',
        });
        expect(icon).toHaveStyleRule('width', '20px', {
            modifier: 'svg',
        });
        expect(icon).toHaveStyleRule('height', '20px', {
            modifier: 'svg',
        });
    });
});
