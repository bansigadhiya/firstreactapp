import React,{useState,useEffect} from "react";
import './CounterFun.css'

function CounterFun(){
    const[count,setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    })
    return(
        <>
            <p>
                {count}
            </p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

export default CounterFun;