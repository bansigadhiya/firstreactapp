import React,{useState} from "react";
import './Form.css'

function ManageForm(){

    const[name,setName] = useState("");
    const[fullName,setFullName] = useState("");
    const[email,setEmail] = useState("");
    const[number,setNumber] = useState("");
    const[password,setPassword] = useState("");

    const changeName = (e) => {
        setName(e.target.value);
        setFullName(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changeNumber = (e) => {
        setNumber(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const submitData =  (e) => {
        e.preventDefault();
        console.log(fullName);
        document.getElementById("heading").innerHTML = `Your Information`
        document.getElementById("name").innerHTML = `your name is ${name}`
        document.getElementById("email").innerHTML = `your email is ${email}`
        document.getElementById("number").innerHTML = `your Phone number is ${number}`
        document.getElementById("password").innerHTML = `your Password is ${password}`
    }

    return(
        <>
            <h1>Form</h1>
            <form action="" onSubmit={(e) => submitData(e)}>
                <label>Name : </label>
                <input type="text" onChange={(e) => changeName(e)}></input>
                <br></br>
                <label>Email : </label>
                <input type="text" onChange={(e) => changeEmail(e)}></input>
                <br></br>
                <label>Phone Number : </label>
                <input type="text" onChange={(e) => changeNumber(e)}></input>
                <br></br>
                <label>Password : </label>
                <input type="text" onChange={(e) => changePassword(e)}></input>
                <br></br>
                <br></br>
                <input type="submit"></input>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="box">
                <h1 id="heading"></h1>
                <p id="name"></p>
                <p id="email"></p>
                <p id="number"></p>
                <p id="password"></p>
            </div>
        </>
    )
}

export default ManageForm;