import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { TimelineFaker } from '../../../mocks/timeline.faker';
import * as useAsync from '../../../hooks/useAsync';
import ThemeProvider from '../../../utils/ThemeProviderTest';
import Timeline from '../timeline';
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

const timelineResponseFaker = new TimelineFaker();
const timelineResponse = timelineResponseFaker.generate();

describe('Timeline container', () => {
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
            value: timelineResponse,
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
                <Timeline />
            </ThemeProvider>,
        );
        expect(container.asFragment()).toMatchSnapshot();
    });

    it('should call the api to bring the necessary data when rendering the timeline', () => {
        render(
            <ThemeProvider>
                <Timeline />
            </ThemeProvider>,
        );
        expect(mockUseAsyncSpyFn.execute).toBeCalled();
    });
});
