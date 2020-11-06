import { ISLOADING, ERROR, RESET } from './types';

export const isLoadingAction = (isLoading: boolean) => {
    return {
        type: ISLOADING,
        payload: isLoading,
    };
};

export const setErrorAction = (error: string) => {
    return {
        type: ERROR,
        payload: error,
    };
};

export const ResetAction = () => {
    return {
        type: RESET,
    };
};
