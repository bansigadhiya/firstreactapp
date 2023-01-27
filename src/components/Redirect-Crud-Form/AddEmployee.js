import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import '../Form.css';
import Getdata from '../Utils/Getdata';

function AddEmployee() {

    const navigate = useNavigate();

    const back =  () => {
        navigate("/")
    }

    const [initial, setInitial] = useState({
        name: '',
        email: '',
        mobile: '',
        gender: '',
        address: ''
    });

    const [storeData, setStoreData] = useState(Getdata);
    const [IsSubmit,setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({
            ...initial, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, mobile, gender, address} = initial;

        if(name == '' || email == '' || mobile == '' || gender == '' || address == ''){
            console.error("Enter Value...");
        }else{
            setStoreData([...storeData, initial]);
            setIsSubmit(true);
    
            setInitial({
                name: '',
                email: '',
                mobile: '',
                gender: '',
                address: ''
            })
        }
        
    }

    useEffect(() => {
        localStorage.setItem("EmployeeCrud",JSON.stringify(storeData));
        console.log(storeData,"storedata");
        if(IsSubmit){
            navigate("/ViewEmpData");
        }
    },[storeData])

    return (
        <div>
            <Container>
                <div className='row align-items-center'>
                    <div className='col-7 mx-auto mt-5'>
                        <div className='heading d-flex justify-content-between align-items-center'>
                            <h2 className='text-black'>Add Employee</h2>
                            <Button type="submit" className='back m-0 py-1 px-1 bg-dark border-0 px-4 py-1 rounded-0' onClick={() => {back()}}>
                                Back
                            </Button>
                        </div>
                        
                        <Form className='border-0 p-4 w-100' onSubmit={(e) => handleSubmit(e)}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="name" value={initial.name} onChange={handleChange} className="rounded-0"/>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Email :</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" name="email" value={initial.email} onChange={handleChange} className="rounded-0"/>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Mobile Number :</Form.Label>
                                <Form.Control type="text" placeholder="Enter mobile number" name="mobile" value={initial.mobile} onChange={handleChange} className="rounded-0"/>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Gender :</Form.Label>
                                <div>
                                    <Form.Check
                                        inline
                                        label="Male"
                                        name="gender"
                                        type="radio"
                                        value="Male"
                                        checked={initial.gender === "Male"}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="Female"
                                        name="gender"
                                        type="radio"
                                        value="Female"
                                        checked={initial.gender === "Female"}
                                        onChange={handleChange}
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Address :</Form.Label>
                                <Form.Control type="text" placeholder="Enter address" name="address" value={initial.address} onChange={handleChange} className="rounded-0"/>
                            </Form.Group>

                            <Button variant="primary" type="submit" className='m-0 py-2 px-1 bg-dark border-0 px-4 py-1 rounded-0 submit'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default AddEmployee
