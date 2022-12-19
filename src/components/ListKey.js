import React,{useState} from "react";

function ListKey(){

    const[item,setItem] = useState([1,2,3]);

    const addItem = () => {
        console.log("add item");
        setItem = useState[1,2,3,4,5];
    }

    return(
        <>
            <ul>
                {
                    item.map((item) => {
                        return(
                            <li>{item}</li>
                        )
                    })
                }
            </ul>

            <button onClick={() => addItem()}>Add item</button>
        </>
    )
}

export default ListKey;