import React from 'react';
import ReactDOM from 'react-dom/client';
import { getCLS, getFID, getLCP } from 'web-vitals';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

getCLS(console.log);
getFID(console.log);
getLCP(console.log);