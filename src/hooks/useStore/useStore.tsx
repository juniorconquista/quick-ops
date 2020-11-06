import { useContext, createContext } from 'react';
import { headerInitialState } from '../../store/context/header/reducer';

export const defaultStore = {
    store: { ...headerInitialState },
    dispatch: () => {},
};

export const StoreContext = createContext(defaultStore as any);

export default () => useContext(StoreContext);
