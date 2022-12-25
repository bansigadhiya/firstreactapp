import React,{useState} from "react";
import './Form.css'

function ManageForm(){

    const[data,setData] = useState({
        name : '',
        email : '',
        number : '',
        password : ''
    })

    const[storeData,setStoreData] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data, [name] : value
        })
    }

    const submitData =  (e) => {
        e.preventDefault();
        const newData = data;
        setStoreData([...storeData, newData]);
    
        setData({
            name : ' ',
            email : ' ',
            number : ' ',
            password : ' '
        })
    }

    return(
        <>
            <h1>Form</h1>
            <form action="" onSubmit={(e) => submitData(e)}>
                <label>Name : </label>
                <input type="text" name="name" onChange={handleChange} value={data.name}></input>
                <br></br>
                <label>Email : </label>
                <input type="text" name="email" onChange={handleChange} value={data.email}></input>
                <br></br>
                <label>Phone Number : </label>
                <input type="text" name="number" onChange={handleChange} value={data.number}></input>
                <br></br>
                <label>Password : </label>
                <input type="text" name="password" onChange={handleChange} value={data.password}></input>
                <br></br>
                <br></br>
                <input type="submit"></input>
            </form>
             {
                storeData.map((d,i) => {
                    
                    return(
                        <div>
                        <span>
                            {i+1}
                        </span>
                        <span>
                            {d.name}
                        </span>
                        <span>
                            {d.email}
                        </span>
                        <span>
                            {d.number}
                        </span>
                        <span>
                            {d.password}
                        </span>
                    </div>
                    )
                })
             }   
        </>
    )
}

export default ManageForm;