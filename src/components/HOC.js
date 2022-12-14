import React from "react";

function Updatecom(Originalcom){

    class Newcom extends React.Component{

        constructor(){
            super();
    
            this.state = {
                count : 0,
            }
        }
    
        increment = () =>{
            this.setState({count : this.state.count + 1})
        }

        render(){

            return(
                <Originalcom count={this.state.count} incrementd={() => this.increment()}/>
            )
        }
    }

    return Newcom;
}

export default Updatecom;