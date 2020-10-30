import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import './assets/style/reset.css';

const App: React.FC = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes />
        </Router>
    );
};

export default App;
