import React ,{useState,useEffect}from "react";

function WindowSize(){

    const[size,setsize] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setsize(window.innerWidth)
        }

        window.addEventListener('resize' ,handleResize);
    })

    return(
        <>
            <h2>Window {size} Size</h2>
        </>
    )
}

export default WindowSize;