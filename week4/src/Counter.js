import { useState } from 'react';
import CountNumber from './CountNumber';
import Button from './Button';

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count+1);
    }

    function decrement() {
        setCount(count-1);
    }

    function largeIncrement() {
        setCount(count+10);
    }

    function largeDecrement() {
        setCount(count-10);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <CountNumber count={count} />
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center'}}>
                <Button onClick={largeDecrement}>-10</Button>
                <Button onClick={decrement}>-1</Button>
                <Button onClick={reset}>reset</Button>
                <Button onClick={increment}>+1</Button>
                <Button onClick={largeIncrement}>+10</Button>
            </div>
        </div>
    )
}

export default Counter;