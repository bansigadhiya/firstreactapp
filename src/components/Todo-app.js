import React, { useEffect, useState } from "react";
import "./Todo-app.css";

const getlist = () => {
    let items = localStorage.getItem("todolist");
    if(items){
        return(items = JSON.parse(localStorage.getItem("todolist")));
    }else{
        return [];
    }
}

function TodoApp(){

    const [newItem,setNewItem] = useState("");
    const [items,setItems] = useState(getlist());

    useEffect(() => {
        localStorage.setItem("todolist",JSON.stringify(items));
    },[items]);

    function addItem(e){
        e.preventDefault();
        const item = {
            id: Math.floor(Math.random() * 1000),
            value : newItem
        };

        setItems(oldList => [...oldList,item]);

        setNewItem("")
        console.log(items);
    }

    function deleteItem(id){
        const newArray  = items.filter(item => item.id !== id);
        setItems(newArray);
    }

    function removeAll(e){
        e.preventDefault();
        setItems([]);
    }

    return(
        <>
            <h1 className="heading">Todo list app</h1>
            <form>
                <input type="text" placeholder="Add item.." value={newItem} onChange={e => setNewItem(e.target.value)}></input>
                <button className="btn" onClick={(e) => addItem(e)}>Add</button>

            <ul>
                {
                    items.map(item => {
                        return(
                            <li key={item.id} className="todo">
                                <span>{item.value}</span>
                                <a onClick={() => deleteItem(item.id)} className="remove"><i class="fa-solid fa-trash"></i></a>
                            </li>
                        )
                    })  
                }
            </ul>
            {
                items.length > 2 ? (
                    <button onClick={(e) => removeAll(e)} className="btn clear">Clear All</button>
                ) : null
            }
            </form>
        </>
    )
}

export default TodoApp;