import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { SidebarFaker } from '../../../mocks/sidebar.faker';
import * as useAsync from '../../../hooks/useAsync';
import ThemeProvider from '../../../utils/ThemeProviderTest';
import Sidebar from '../sidebar';
import 'jest-styled-components';

const setupFetchStub: any = (data: any) => (_url: string) =>
    new Promise((resolve) => {
        resolve({
            json: () =>
                Promise.resolve({
                    data,
                }),
        });
    });

const sidebarResponseFaker = new SidebarFaker();
const sidebarResponse = sidebarResponseFaker.generate();

const props = {
    isOpen: false,
};

describe('Sidebar container', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    beforeEach(() => {
        // spyOn's
        const fakeData = { fake: 'data' };
        jest.spyOn(global, 'fetch').mockImplementation(
            setupFetchStub(fakeData),
        );

        const useAsyncSpy = jest.spyOn(useAsync, 'default');
        const mockUseAsyncSpyFn = {
            ...jest.requireActual('../../../hooks/useAsync'),
            execute: jest.fn(),
            value: sidebarResponse,
        };
        useAsyncSpy.mockImplementation(
            jest.fn((fn) => {
                fn();
                return mockUseAsyncSpyFn;
            }),
        );
    });

    it('tests basic snapshot', () => {
        const useAsyncSpy = jest.spyOn(useAsync, 'default');
        const mockUseAsyncSpyFn = {
            ...jest.requireActual('../../../hooks/useAsync'),
            execute: jest.fn(),
            value: {},
        };
        useAsyncSpy.mockImplementation(
            jest.fn((fn) => {
                fn();
                return mockUseAsyncSpyFn;
            }),
        );

        const container = render(
            <ThemeProvider>
                <Sidebar {...props} />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });
});
