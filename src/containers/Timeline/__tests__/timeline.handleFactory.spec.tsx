import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import timelineHandleFactory from '../timeline.handleFactory';
import { CARDTYPE } from '../timeline.types';

describe('Timeline handleFactory component', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('tests basic snapshot', () => {
        const Component = timelineHandleFactory(CARDTYPE.EXPENSE);
        const container = render(<Component />);
        expect(container.asFragment()).toMatchSnapshot();
    });

    it('should render the EXPENSE component', () => {
        const Component = timelineHandleFactory(CARDTYPE.EXPENSE);
        render(<Component />);
        expect(screen.queryByTestId('mocked-expense-component')).toBeTruthy();
    });

    it('should render the ACCOUNTABILITY_SUBMITTED component', () => {
        const Component = timelineHandleFactory(
            CARDTYPE.ACCOUNTABILITY_SUBMITTED,
        );
        render(<Component />);
        expect(
            screen.queryByTestId('mocked-accountability-component'),
        ).toBeTruthy();
    });

    it('should render the EVALUATION component', () => {
        const Component = timelineHandleFactory(CARDTYPE.EVALUATION);
        render(<Component />);
        expect(
            screen.queryByTestId('mocked-evaluation-component'),
        ).toBeTruthy();
    });
});
