import React, {useState} from 'react';
import '../Counter/index.css';

export const Counter = () =>{
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    return(
        <div className="Counter">
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        </div>
    )
  }