import { ISLOADING, ERROR } from './types';

export const headerInitialState = {
    header: {
        data: {},
        isLoading: false,
        error: null,
    },
};

const headerReducer = (
    state = headerInitialState,
    action: { type: string; payload: any },
) => {
    switch (action.type) {
        case ISLOADING:
            return {
                header: {
                    ...state.header,
                    isLoading: action.payload,
                },
            };
        case ERROR:
            return {
                header: {
                    ...state.header,
                    error: action.payload,
                },
            };
        default:
            return state;
    }
};

export default headerReducer;
