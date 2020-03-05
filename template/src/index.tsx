import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * If you are loading the UI from within the consuming application and need special attention or to pass specific data,
 * replace the mount below with a unique function that you can call from the consuming application e.g.
 *
 * window.loadMyApplicationName = (mount = document.getElementById('root'), { ...your arguments needed }) => {
 *      ReactDOM.render(<App {...pass arguments along} />, mount);
 * }
 */

ReactDOM.render(<App />, document.getElementById('root'));
