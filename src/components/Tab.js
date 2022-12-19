import React, { useState, useEffect } from "react";

function Tab() {

    const [type, setType] = useState("Users");


    function changeType(t) {
        setType(t);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))
    } ,[])

    

    return (
        <>
            <button onClick={() => changeType("Users")}>Users</button>
            <button onClick={() => changeType("Posts")}>Posts</button>
            <button onClick={() => changeType("Comments")}>Comments</button>
            <button onClick={() => changeType("Albums")}>Albums</button>

            <h1>{type}</h1>
        </>
    )
}

export default Tab;