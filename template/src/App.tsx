import React, { useState } from 'react';
import styles from './App.module.scss';

export const App = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className={styles.count} data-testid={'count'}>
                {count}
            </div>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Subtract</button>
        </>
    );
};
export default App;
