import React, { memo, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from 'quarks-ui';

const Home = React.lazy(() => import('./containers/Home'));

export default memo(() => (
    <Switch>
        <Route exact path="/">
            <Suspense fallback={<Box styling="row">Loading...</Box>}>
                <Home />
            </Suspense>
        </Route>
    </Switch>
));
