import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
// import '../Form.css';

const getData = () => {
    let getdata = localStorage.getItem("storedata");
    if (getdata) {
        return (getdata = JSON.parse(localStorage.getItem("storedata")));
    }
    else {
        return []
    }
}

function Crud() {

    // initial value
    const [initial, setInitial] = useState({
        name: '',
        email: ''
    })

    // define stat for store data
    const [storeData, setStoreData] = useState(getData());

    //define state for handle edit
    const [edit, setEdit] = useState(false);

    //define stat for index
    const [editIndex, setEditIndex] = useState('');

    //define stat for save button
    const [saveEdit, setSaveEdit] = useState(false);

    //edit initial
    const [editInitial, setEditInitial] = useState({
        name: '',
        email: ''
    })

    //on change event
    const changeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({
            ...initial, [name]: value
        })
    }

    //change field value
    const changeEditInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEditInitial({
            ...editInitial, [name]: value
        })
    }

    //save edit data
    const saveEditData = (index) => {
        setSaveEdit(false);
        setEdit(false);
        let newArray = storeData;
        newArray[index] = editInitial;
        setStoreData([...newArray])
    }

    //edit value
    const handleEdit = (data, index) => {
        setEditIndex(index);
        setEdit(true);
        setEditInitial(data);
    }

    //blur input field
    const blurInput = () => {
        setSaveEdit(true)
    }

    //delete data
    const deleteData = (index) => {
        console.log(index);
        let filterdata = storeData.filter((el, id) => {

            return id !== index
        })
        setStoreData([...filterdata]);
        console.log(storeData);
    }
    console.log(storeData);

    //submit form
    const submitData = (e) => {
        e.preventDefault();

        setStoreData([...storeData, initial]);

        setInitial({
            name: '',
            email: ''
        })

    }

    // localstorage
    useEffect(() => {
        localStorage.setItem("storedata", JSON.stringify(storeData));
    }, [storeData])

    return (
        <>
            <Container>
                <Form className='mt-4' onSubmit={(e) => submitData(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={initial.name} placeholder="Enter name.." onChange={(e) => { changeInput(e) }} className="rounded-0" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" value={initial.email} placeholder="Enter email.." onChange={(e) => { changeInput(e) }} className="rounded-0" />
                    </Form.Group>
                    <Button type="submit" className='px-2 py-1 rounded-0 ms-0'>
                        Submit
                    </Button>
                </Form>
            </Container>

            <Container className='mt-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className='col-1'>No.</th>
                            <th className='col-4'>Name</th>
                            <th className='col-4'>Email</th>
                            <th className='col-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storeData.map((data, index) => {

                                return (
                                    <tr key={index}>
                                        <td className='col-1'>
                                            {index + 1}
                                        </td>
                                        <td className='col-4'>
                                            {
                                                edit === true && editIndex === index ?
                                                    <InputGroup>
                                                        <Form.Control
                                                            placeholder="name"
                                                            onBlur={() => { blurInput() }}
                                                            name="name"
                                                            value={editInitial.name}
                                                            onChange={(e) => { changeEditInput(e) }}
                                                            className="rounded-0"
                                                        />
                                                    </InputGroup> : data.name
                                            }
                                        </td>
                                        <td className='col-4'>
                                            {
                                                edit === true && editIndex === index ?
                                                    <InputGroup>
                                                        <Form.Control
                                                            placeholder="email"
                                                            onBlur={() => { blurInput() }}
                                                            name="email"
                                                            value={editInitial.email}
                                                            onChange={(e) => { changeEditInput(e) }}
                                                            className="rounded-0"
                                                        />
                                                    </InputGroup> : data.email
                                            }
                                        </td>
                                        <td className='col-3 align-items-center'>
                                            {
                                                saveEdit ? <Button variant="primary" type="button" className='px-2 py-1 rounded-0' onClick={() => { saveEditData(index) }}>Save</Button> : <Button variant="primary" type="button" className='px-2 py-1 rounded-0' onClick={() => handleEdit(data, index)}>Edit</Button>
                                            }
                                            <span style={{ borderRight: "2px solid black", marginRight: "0px", marginLeft: "10px", verticalAlign: "middle" }}></span>
                                            <Button variant="danger" className='px-2 py-1 rounded-0 ms-2' onClick={() => deleteData(index)}>Delete</Button>
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

export default Crud
