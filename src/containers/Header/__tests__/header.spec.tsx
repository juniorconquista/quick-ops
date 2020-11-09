import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { HeaderFaker } from '../../../mocks/header.faker';
import * as useAsync from '../../../hooks/useAsync';
import ThemeProvider from '../../../utils/ThemeProviderTest';
import Header from '../header';
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

const headerResponseFaker = new HeaderFaker();
const headerResponse = headerResponseFaker.generate();

describe('Header container', () => {
    let mockUseAsyncSpyFn: any;

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
        mockUseAsyncSpyFn = {
            ...jest.requireActual('../../../hooks/useAsync'),
            execute: jest.fn(),
            value: headerResponse,
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
                <Header />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });

    it('should call the api to bring the necessary data when rendering the header', () => {
        render(
            <ThemeProvider>
                <Header />
            </ThemeProvider>,
        );
        expect(mockUseAsyncSpyFn.execute).toBeCalled();
    });
});
