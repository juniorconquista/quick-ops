import { useReducer } from 'react';

import headerReducer, {
    headerInitialState,
} from '../../store/context/header/reducer';

const useCombinedReducers = () => {
    const [headerStore, header] = useReducer(headerReducer, headerInitialState);

    return {
        store: { ...headerStore },
        reducers: [header],
    };
};

export default useCombinedReducers;
