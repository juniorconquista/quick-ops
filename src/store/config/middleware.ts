import { RESET } from '../context/header/types';

type Action = {
    type: string;
    payload: any;
};

const middleware = (action: Action) => (dispatch: (action: Action) => void) => {
    if (action.type === RESET) {
        // dispara uma action caso necessario
    }
    dispatch(action);
};

export default middleware;
