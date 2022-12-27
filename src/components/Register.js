import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Register.css';

const inivalue = {
        name : '',
        email : '',
        password : '',
        confirmpassword : ''
    }

const getFormData = () => {
    let data = localStorage.getItem("formdata");
    if(data){
        return(data = JSON.parse(localStorage.getItem("formdata")));
    }else{
        return [];
    }
}

function Register(){
    const[submitData,setSubmitData] = useState(getFormData());

    useEffect(() => {
        window.localStorage.setItem("formdata",JSON.stringify(submitData))
    },[submitData])

    const {values,handleBlur,handleChange,handleSubmit,touched,errors} = useFormik({
        initialValues : inivalue,
        validationSchema : Yup.object({
            name : Yup.string().min(5).required("please enter your name.."),
            email : Yup.string().email().required("please enter your email.."),
            password : Yup.string().min(6).required("please enter your password.."),
            confirmpassword : Yup.string().oneOf([Yup.ref("password")],"password does not match..").required("please confirm your password.."),
        }),
        onSubmit : (values , action) => {
            const newData = values;
            setSubmitData([...submitData , newData]);
            action.resetForm('');   
        }  
           
    })
    
    return(
        <>
            <h3 className="mb-4 ms-3">Register Form</h3>

            <form onSubmit={handleSubmit} className="ms-3">
                <label className="pe-2">Name : </label>
                <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                {
                    errors.name && touched.name ? <span className="text-danger ps-2 error">{errors.name }</span> : null
                }
                <br />
                <label className="pe-2">Email : </label>
                <input type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                {
                    errors.email && touched.email ? <span className="text-danger ps-2 error">{ errors.email }</span> : null
                }
                <br />
                <label className="pe-2">Password : </label>
                <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                {
                    errors.password && touched.password ? <span className="text-danger ps-2 error">{ errors.password }</span> : null
                }
                <br />
                <label className="pe-2">Confirm Password : </label>
                <input type="password" name="confirmpassword" value={values.confirmpassword} onChange={handleChange} onBlur={handleBlur}/>
                {
                    errors.confirmpassword && touched.confirmpassword ? <span className="text-danger ps-2 error">{ errors.confirmpassword }</span> : null
                }
                <br />

                <button type="submit">Submit</button>
            </form>

            <ul className="mt-5">
                {
                    submitData.map((data,i) => {
                        return(
                            <>
                                <li key={i} className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="col-2">
                                        <span>
                                            {i+1}
                                        </span>
                                    </div>
                                    <div className="col-3">
                                        <span>
                                            {data.name}
                                        </span>
                                    </div>
                                    <div className="col-4">
                                        <span>
                                            {data.email}
                                        </span>
                                    </div>
                                    <div className="col-3">
                                        <span>
                                            {data.password}
                                        </span>
                                    </div>
                                </li>
                            </>
                            
                            
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Register;