//FBC
import { Counter } from './Counter';
import { Component, useState } from 'react';

const CounterState=(props)=>{
    let [count,setCount]= useState(0);
    
    //count=variable, setCount=method
    return(
        <>
        <h3>Function Based Component
        </h3>
        <h4>Props Data:{props.role},{props.fullDetails}</h4>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    );
}
export default CounterState;

