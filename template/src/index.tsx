import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
const App = lazy(() => import('./App'));

declare global {
    interface Window {
        loadSharedUi: (mount: HTMLElement | null) => void;
    }
}

window.loadSharedUi = (mount = document.getElementById('root')) => {
    ReactDOM.render(
        <Suspense fallback={'Loading...'}>
            <App />
        </Suspense>,
        mount,
    );
};
