import React from "react";
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import  RegisterSchema  from '../src/schema/RegisterSchema';

function Register(){

    const inivalue = {
        name : '',
        email : '',
        password : ''
    }

    const formik = useFormik({
        initialValues : inivalue,
        validationSchema : RegisterSchema,
        onSubmit : values => {
            console.log("form data ",values);
        }
       
    })
    console.log("form value",formik.values);
    return(
        <>
            <h1>Register Form</h1>

            <form onSubmit={formik.handleSubmit}>
                <label>Name : </label>
                <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/>
                <br />
                <label>Email : </label>
                <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange}/>
                <br />
                <label>Password : </label>
                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
                <br />

                <input type="submit"/>
            </form>
        </>
    )
}

export default Register;