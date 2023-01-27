import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Getdata from '../Utils/Getdata';
import '../Form.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ViewEmpData() {


    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }
    const [isSearch,setIsSearch] = useState(false);
    const [storeData, setStoreData] = useState(Getdata);
    const [searchName,setSearchName] = useState({
        search : ''
    })
    const [IsEdit, setIsEdit] = useState(false)
    const [IsSave, setIsSave] = useState(false)
    const [EditIndex, setEditIndex] = useState('')
    const [EditInput, setEditInput] = useState({
        name: '',
        email: '',
        mobile: '',
        gender: '',
        address: ''
    })

    const handleEdit = (index, data) => {
        setIsEdit(true)
        setEditIndex(index)
        setEditInput(data)
        setIsSave(false)
    }

    const handleBlur = (index) => {
        setIsSave(true)
        setEditIndex(index)
    }

    const handleEditInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (IsEdit) {
            setEditInput({
                ...EditInput, [name]: value
            })
        }
    }

    const handleSave = (index) => {
        setIsEdit(false);
        setIsSave(true)
        const newArray = storeData;
        newArray[index] = EditInput;
        setStoreData([...newArray]);
        setEditInput({
            name: '',
            email: '',
            mobile: '',
            gender: '',
            address: ''
        })
        console.log(storeData, "filterdata");
    }

    const handleDelete = (index) => {
        console.log("delete", index);
        if (IsSave) {
            setIsSave(false)
        } else {
            setIsSave(true)
        }

        const filterData = storeData.filter((el, id) => {
            return id !== index;
        })

        setStoreData([...filterData])
    }

    const handleSearch = (e) => {
        setIsSearch(true);
        const name = e.target.value;
        const value = e.target.value;

        setSearchName({[name]:value})

        const filterName = storeData.filter((data) => {

            // console.log(data,"data");
            return data.name.toLowerCase().search(value) != -1
        })
        console.log(filterName,"filterName");
    //    setStoreData(filterName)
    }

    useEffect(() => {
        localStorage.setItem("EmployeeCrud", JSON.stringify(storeData));
    }, [storeData])

    return (
        <>
            <Container>
                <div className='heading d-flex justify-content-between align-items-center my-3'>
                    <h2 className='text-black'>View Employee Data</h2>
                    <Form>
                        <Form.Control placeholder="Search Name.." className='rounded-0' name='search' value={searchName.search} onChange={(e) => {handleSearch(e)}}/>
                    </Form>
                    <Button type="submit" className='back m-0 py-1 px-1 bg-dark border-0 px-4 py-1 rounded-0' onClick={() => { back() }}>
                        Back
                    </Button>
                </div>
                <Table bordered hover className='w-100'>
                    <thead>
                        <tr className="d-flex w-100">
                            <th className="col-1">Id</th>
                            <th className="col-2">Name</th>
                            <th className="col-2">Email</th>
                            <th className="col-2">Mobile number</th>
                            <th className="col-1">Gender</th>
                            <th className="col-2">Address</th>
                            <th className='col-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storeData.map((data, index) => {

                                return (
                                    <tr key={index} className="d-flex w-100">
                                        <td className='col-1'>{index + 1}</td>
                                        <td className='col-2'>
                                            {
                                                IsEdit && EditIndex === index ? <InputGroup>
                                                    <Form.Control
                                                        className='edit py-1 px-2 rounded-0'
                                                        name="name"
                                                        value={EditInput.name}
                                                        onBlur={() => { handleBlur(index) }}
                                                        onChange={(e) => { handleEditInput(e) }}
                                                    />
                                                </InputGroup> : data.name
                                            }
                                        </td>
                                        <td className='col-2'>
                                            {
                                                IsEdit && EditIndex === index ? <InputGroup>
                                                    <Form.Control
                                                        className='edit py-1 px-2 rounded-0'
                                                        name="email"
                                                        value={EditInput.email}
                                                        onBlur={() => { handleBlur(index) }}
                                                        onChange={(e) => { handleEditInput(e) }}
                                                    />
                                                </InputGroup> : data.email
                                            }
                                        </td>
                                        <td className='col-2'>
                                            {
                                                IsEdit && EditIndex === index ? <InputGroup>
                                                    <Form.Control
                                                        className='edit py-1 px-2 rounded-0'
                                                        name="mobile"
                                                        value={EditInput.mobile}
                                                        onBlur={() => { handleBlur(index) }}
                                                        onChange={(e) => { handleEditInput(e) }}
                                                    />
                                                </InputGroup> : data.mobile
                                            }
                                        </td>
                                        <td className='col-1 d-flex align-items-center radio text-dark'>
                                            {
                                                IsEdit && EditIndex === index ? <InputGroup>
                                                    <Form.Check
                                                        inline
                                                        label="Male"
                                                        name="gender"
                                                        type="radio"
                                                        value="Male"
                                                        checked={EditInput.gender === "Male"}
                                                        onBlur={() => { handleBlur(index) }}
                                                        onChange={(e) => { handleEditInput(e) }}
                                                        className="text-dark"
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Female"
                                                        name="gender"
                                                        type="radio"
                                                        value="Female"
                                                        checked={EditInput.gender === "Female"}
                                                        onBlur={() => { handleBlur(index) }}
                                                        onChange={(e) => { handleEditInput(e) }}
                                                        className="text-dark"
                                                    />
                                                </InputGroup> : data.gender
                                            }
                                        </td>
                                        <td className='col-2'>
                                            {
                                                IsEdit && EditIndex === index ? <InputGroup>
                                                    <Form.Control
                                                        className='edit py-1 px-2 rounded-0'
                                                        name="address"
                                                        value={EditInput.address}
                                                        onBlur={() => { handleBlur(index) }}
                                                        onChange={(e) => { handleEditInput(e) }}
                                                    />
                                                </InputGroup> : data.address
                                            }
                                        </td>
                                        <td className='col-2 d-flex align-items-center'>
                                            {
                                                IsEdit && EditIndex === index ? <Button variant="primary" onClick={() => { handleSave(index) }} className='action w-50 py-1 bg-info ms-0 me-2 border-0 rounded-0'>Save</Button> :
                                                    <Button variant="primary" onClick={() => handleEdit(index, data)} className='action w-50 py-1 bg-info ms-0 me-2 border-0 rounded-0'>Edit</Button>
                                            }
                                            <Button variant="danger" onClick={() => { handleDelete(index) }} className='action w-50 py-1 bg-danger ms-0 border-0 rounded-0'>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default ViewEmpData

