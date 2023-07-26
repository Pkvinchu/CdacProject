import React from 'react';

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBSelect,
    MDBInput,
    MDBCheckbox,
    MDBBtnGroup
}
    from 'mdb-react-ui-kit';


export default function AddOfficialWorker() {


    const [allValues, setAllValues] = useState({
        user_aadhar_number: '',
        user_address_city:'Pune',
        user_address_state:'Maharashtra',
        user_contact_number: '',
        user_email: '',
        user_first_name: '',
        user_last_name: '',
        user_middle_name: '',
        user_password: '',
        user_pincode: '',
        user_role: '',
        userUsername: '',
        user_department: ''
    });

    let [oneFile, setOneFile] = useState({ image: undefined });

    let [flag, setFlag] = useState(false);
    let [department, setDepartment] = useState([])
    
    let navigate = useNavigate()


    const setValues = (e) => {
        let field = e.target.value;
        let name = e.target.name;
   
        setAllValues({ ...allValues, [e.target.name]: e.target.value });

    }


    const check = (e) => {

        e.preventDefault();
        console.log(allValues)
        
        // Create an object of formData
        const myFile = new FormData();

        // Update the formData object
        myFile.append(
            "myFile",
            oneFile.image
        );

        axios.post(`http://localhost:8080/user/insert/${allValues.user_aadhar_number}/${allValues.user_first_name}/${allValues.user_middle_name}/${allValues.user_last_name}/${allValues.userUsername}/${allValues.user_password}/${allValues.user_contact_number}/${allValues.user_email}/${allValues.user_role}/${allValues.user_address_city}/${allValues.user_address_state}/${allValues.user_pincode}/${allValues.user_department}`, myFile, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then((resolve) => {
                alert(allValues.user_role+" added successfully");
                console.log(resolve);
                navigate('/admindashboard')
            }).catch((reject) => {
                console.log(reject)
            })
    }

    useEffect(() => {

        const sessData = window.sessionStorage.getItem('username');
        const role = window.sessionStorage.getItem('role');
        console.log("Session console - ", sessData);
        console.log("Session Parsed - ", JSON.parse(sessData));

        if (sessData != '' && sessData != 'undefined' && sessData != null && role == 'ADMIN') {
            setFlag(true);
            
            axios.get('http://localhost:8080/govdept/getall').then((response) => {

                console.log(response.data);
                setDepartment(response.data);
                
            }).catch(error => {

                console.log("NOT OK")
                console.log(error);
            })
        }
        else {
            navigate('/adminlogin')
        }

    }, [])

    // --------------------------------------Set Department
    const handleSelect = (e) => {
        console.log("enter handler")
        console.log(e.target.value)

        setAllValues({ ...allValues, user_department: e.target.value })

    }

    // --------------------------------------Set Role

    const handleRole = (e) => {
        console.log(e.target.value);
        setAllValues({ ...allValues, user_role: e.target.value })
    }

        // -------------------------------------------- Set Image
        const setImage = (e) => {
            e.preventDefault();
            let field = e.target.files[0];

            setOneFile({ image: e.target.files[0] });
            console.log(oneFile.image);

        }


    // ------------------------------------------------------------- Session Management
    const logout = () => {

        window.sessionStorage.removeItem('username');
        window.sessionStorage.removeItem('role');
        // window.sessionStorage.clear();
        // window.location.reload(false);
        navigate("/");

    };

    // ------------------------------------------------------------ return

    return (
        <div >
            {flag &&
                <MDBContainer fluid className='h-custom' >

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>

                        <MDBCol col='8' className='m-5'>

                            <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>

                                <MDBCardBody className='p-0'>

                                    <MDBRow style={{ justifyContent: 'flex-end' }}>

                                        <MDBCol md='5' className='p-5 bg-white'>

                                            <h3 className="fw-normal mb-5" style={{ color: '#4835d4' }}> <b>REGISTRATION</b></h3>
                                            <h5 className="fw-normal mb-5" style={{ color: '#4835d4' }}>Official / Worker</h5>


                                            <MDBRow>

                                                <MDBCol md='6'>
                                                    <MDBInput
                                                        wrapperClass='mb-4'
                                                        label='First Name'
                                                        size='lg' id='form1'
                                                        type='text'
                                                        name='user_first_name'
                                                        onChange={setValues}
                                                    />
                                                </MDBCol>

                                                <MDBCol md='6'>
                                                    <MDBInput
                                                        wrapperClass='mb-4'
                                                        label='Middle Name'
                                                        name='user_middle_name'
                                                        size='lg'
                                                        id='form2'
                                                        type='text'
                                                        onChange={setValues}
                                                    />
                                                </MDBCol>

                                            </MDBRow>


                                            <MDBRow>

                                                <MDBCol md='6'>
                                                    <MDBInput
                                                        wrapperClass='mb-4'
                                                        label='Last Name'
                                                        name='user_last_name'
                                                        size='lg'
                                                        id='form3'
                                                        type='text'
                                                        onChange={setValues}
                                                    />
                                                </MDBCol>

                                                <MDBCol md='6'>
                                                    <MDBInput
                                                        wrapperClass='mb-4'
                                                        label='Aadhaar Number'
                                                        name='user_aadhar_number'
                                                        size='lg'
                                                        id='form4'
                                                        type='number'
                                                        onChange={setValues}
                                                    />
                                                </MDBCol>

                                            </MDBRow>


                                            <MDBInput
                                                wrapperClass='mb-4'
                                                className='form-control form-control-lg'
                                                label='Profile Image'
                                                size='lg'
                                                id='userprofile'
                                                type='file'
                                                name='user_profile_image'
                                                onChange={setImage}
                                            />

                                            <MDBRow>

                                                <MDBCol md='6'>
                                                    <MDBInput
                                                        wrapperClass='mb-4'
                                                        label='Username*'
                                                        name='userUsername'
                                                        size='lg'
                                                        // id='form1'
                                                        type='text'
                                                        onChange={setValues}
                                                    />
                                                </MDBCol>

                                                <MDBCol md='6'>
                                                    <MDBInput
                                                        wrapperClass='mb-4'
                                                        label='Password*'
                                                        name='user_password'
                                                        size='lg'
                                                        // id='form2'
                                                        type='password'
                                                        onChange={setValues}
                                                    />
                                                </MDBCol>

                                            </MDBRow>

                                        </MDBCol>


                                        <MDBCol md='4' className='bg-indigo p-5'>

                                            {/* <h3 className="fw-normal mb-5 text-white" style={{ color: 'blue' }}>Contact Details</h3> */}

                                            <MDBInput
                                                wrapperClass='mb-4'
                                                labelClass='text-white'
                                                name='user_address_state'
                                                label='State'
                                                size='lg'
                                                // id='form5'
                                                type='text'
                                                disabled="true"
                                                placeholder="Maharashtra"
                                                value={"Maharashtra"}
                                                onChange={setValues}
                                            />

                                            <MDBRow>

                                                <MDBCol md='5'>
                                                    <MDBInput
                                                        wrapperClass='mb-4'
                                                        labelClass='text-white'
                                                        name='user_pincode'
                                                        label='Pin Code'
                                                        size='md'
                                                        // id='form6'
                                                        type='number'
                                                        onChange={setValues}
                                                    />
                                                </MDBCol>

                                                <MDBCol md='7'>
                                                    <MDBInput
                                                        className="form-control"
                                                        wrapperClass='mb-4'
                                                        labelClass='text-white'
                                                        name='user_address_city'
                                                        label='City'
                                                        size='md'
                                                        // id='form7'
                                                        type='text'
                                                        disabled="true"
                                                        placeholder="Pune"
                                                        value="Pune"
                                                        onChange={setValues}
                                                    />
                                                </MDBCol>

                                            </MDBRow>




                                            <select
                                                className="form-control"
                                                name="user_role"
                                                onChange={handleRole}
                                                required
                                            >
                                                <option value="selectRole" disabled={true} selected>Role</option>

                                                <option value="WORKER" >
                                                    WORKER
                                                </option>
                                                <option value="OFFICIAL" >
                                                    OFFICIAL
                                                </option>

                                            </select>

                                            <hr />


                                            <select
                                                className="form-control"
                                                name="user_department"
                                                onChange={handleSelect}
                                                required
                                            >
                                                <option key={1} >Department</option>
                                                {department.map((item) => (
                                                    <option key={item} value={item.government_department_name} >
                                                        {item.government_department_name}
                                                    </option>
                                                ))}
                                            </select>


                                            <hr />

                                            <MDBRow>

                                                <MDBCol md='12'>


                                                    <MDBInput
                                                        wrapperClass='mb-4'
                                                        labelClass='text-white'
                                                        className='form-control '
                                                        name='user_contact_number'
                                                        label='Phone Number'
                                                        size='small'
                                                        // id='form10'
                                                        type='number'
                                                        onChange={setValues}
                                                    />

                                                </MDBCol>

                                            </MDBRow>


                                            <MDBInput
                                                wrapperClass='mb-4'
                                                labelClass='text-white'
                                                name='user_email'
                                                label='Your Email'
                                                size='lg'
                                                // id='form8'
                                                type='email'
                                                onChange={setValues}
                                            />

                                            <MDBBtnGroup className='align-items-center' shadow='5' aria-label='Basic example'>
                                                <button className="btn btn-info" onClick={check} >
                                                    Register
                                                </button>
                                            </MDBBtnGroup>

                                        </MDBCol>

                                    </MDBRow>

                                </MDBCardBody>

                            </MDBCard>

                        </MDBCol>

                    </MDBRow>

                </MDBContainer>
            }
        </div>
    );
}
