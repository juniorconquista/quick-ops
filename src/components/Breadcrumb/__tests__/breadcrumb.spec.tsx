import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ThemeProvider from '../../../utils/ThemeProviderTest';
import Breadcrumb from '../breadcrumb';
import 'jest-styled-components';

const props = {
    handleSidebar: jest.fn(),
};

describe('Breadcrumb component', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('tests basic snapshot', () => {
        const container = render(
            <ThemeProvider>
                <Breadcrumb {...props} />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });
});
