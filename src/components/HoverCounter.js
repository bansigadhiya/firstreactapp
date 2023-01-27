import React from "react";
import Updatecom from "./HOC";


class HoverCounter extends React.Component{

    render(){
        const{count,incrementd} = this.props;

        return(
            <>
                <h2 onMouseOver={incrementd}>Hover {count} times</h2>
            </> 
        )
    }
}

export default Updatecom(HoverCounter);