
import React, { useState } from 'react';

export default function Functioncpt() {
    const [count, setCount] = useState(0);

    const increaseBtn = () => {
        setCount(count + 1);
    }

    const resetBtn = () => {
        setCount(0);
    }

    return(
        <>
            <h2>Function Hooks</h2>
            <button onClick={increaseBtn}>+1</button>
            <button onClick={resetBtn}>Reset</button>
            <h3>Count: {count}</h3>
        </>
    )
} 