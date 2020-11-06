import React from 'react';
import { StoreContext } from '../../hooks/useStore';

const returnPropsAsDefault = (_: any, props: any) => props;

const Connect = (mapStateToProps = returnPropsAsDefault) => (
    Component: React.FunctionComponent<{ dispatch: () => void }>,
) => (props: any) => (
    <StoreContext.Consumer>
        {({ dispatch, store }: { dispatch: () => void; store: any }) => {
            const storeProps = mapStateToProps(store, props);
            return <Component {...storeProps} dispatch={dispatch} />;
        }}
    </StoreContext.Consumer>
);

export default Connect;
