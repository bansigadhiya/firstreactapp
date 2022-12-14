import React from "react";
import Updatecom from "./HOC";

class Counter extends React.Component{

    
    render(){
        const{count,incrementd} = this.props;
        return(
            <>
                
                <h2>Count Up</h2>
                <h3>
                    {count}
                </h3>
                <button onClick={incrementd}>click me</button>
            </> 
        )
    }
}

export default Updatecom(Counter);