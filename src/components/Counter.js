import React from "react";

class Counter extends React.Component{

    constructor(){
        super();

        this.state = {
            count : 0,
            countDown : 0,
            name : "Hello"
        }
    }

    increment = () =>{
        console.log("increment");
        this.setState({count : this.state.count + 1})
        this.setState({name : "bansi"})
        
        console.log(this.state.count);
    }

    decrement = () =>{
        console.log("decrement");
        this.setState({countDown : this.state.countDown - 1})
        
        
        console.log(this.state.countDown);
    }

    render(){
        return(
            <>
                <h2>Count Up</h2>
                <h3>
                    {this.state.count}
                </h3>
                <button onClick={this.increment}>click me</button>
                <h2>Count down</h2>
                <h3>
                    {this.state.countDown}
                </h3>
                <button onClick={this.decrement}>click me</button>
                <p>
                    {this.state.name}
                </p>
            </> 
        )
    }
}

export default Counter;