import React, { memo, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loading from './components/Loading';
const Home = React.lazy(() => import('./containers/Home'));

export default memo(() => (
    <Switch>
        <Route exact path="/">
            <Suspense fallback={<Loading />}>
                <Home />
            </Suspense>
        </Route>
    </Switch>
));
