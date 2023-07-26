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




export default function RegisterComplaint() {


    // --------------------------------------------------------

    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [status, setStatus] = useState(null);

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);

            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }
    // --------------------------------------------------------------------------------------

    let [flag, setFlag] = useState(true);
    let [department, setDepartment] = useState([]);
    let [complaint, setComplaint] = useState([]);
    let [priority, setPriority] = useState([]);
    let [landmark, setLandmark] = useState("");
    // let [latitude, setLatitude] = useState();
    // let [longitude, setLongitude] = useState();
    let [complaintdescription, setComplaintdescription] = useState("");
    let [selectdept, setSelectdept] = useState("department");
    let [selectCategory, setSelectCategory] = useState('');

    let navigate = useNavigate()




    // -------------------------------------- Image Decoding ------------------------------
    let [oneFile, setOneFile] = useState({ image: undefined });

    const convertImage = (e) => {
        e.preventDefault();
        let field = e.target.files[0];

        setOneFile({ image: e.target.files[0] });
        console.log(oneFile.image);

    }

    const check = () => {

        console.log(JSON.parse(sessionStorage.getItem('username')))

        let x = JSON.parse(sessionStorage.getItem('username'));
        let y = sessionStorage.getItem('username');
        console.log('Username x- ', x)
        console.log('Username y- ', y)

        // Create an object of formData
        const myFile = new FormData();

        // Update the formData object
        myFile.append(
            "myFile",
            oneFile.image
        );

        console.log("1")

        axios.post(`http://localhost:8080/complaintinfo/add/${JSON.parse(sessionStorage.getItem('id'))}/${selectCategory}/${selectdept}/${complaintdescription}/${lat}/${lng}/${landmark}/${priority}`, myFile)
            .then((response) => {

                console.log("2")
                console.log(response.data);
                console.log(JSON.parse(sessionStorage.getItem('id')));
                alert("Complaint registered..")

            }).catch((error) => {

                alert("Complaint not registered..")

                console.log("NOT OK")
                console.log(error);
            })

    }

    useEffect(() => {

        const sessData = window.sessionStorage.getItem('username');
        const role = window.sessionStorage.getItem('role');
        console.log("Session console - ", sessData);
        console.log("Session Parsed - ", JSON.parse(sessData));

        if (sessData != '' && sessData != 'undefined' && sessData != null && role == 'CITIZEN') {

            setFlag(true);

            // ---------------------------- Complaint Category >>>>>>>>>>>>>>>>>>>
            axios.get('http://localhost:8080/complaintcategory/getcomplaintcate').then((response) => {
                console.log(response.data);

                setComplaint(response.data);

            }).catch(error => {
                console.log("NOT OK")
                console.log(error);


            })

            // ---------------------------- Department >>>>>>>>>>>>>>>>>>>
            axios.get('http://localhost:8080/govdept/getall').then((response) => {

                console.log(response.data);

                setDepartment(response.data);

            }).catch(error => {
                console.log("NOT OK")
                console.log(error);

            })



        }
        else {
            navigate('/citizenlogin');
        }

    }, []);


    const setValues = (e) => {

        console.log(e.target.value);
        setSelectCategory(e.target.value);

        const comp = complaint.filter(item => item.complaint_category_name == e.target.value);

        console.log(comp[0].governmentDepartmentEntity.government_department_name);

        setSelectdept(comp[0].governmentDepartmentEntity.government_department_name);



    }

    // ------------------------------------------------------------- Session Management >>>>>>>>>>>>>>>>>>>>>
    const logout = () => {

        window.sessionStorage.removeItem('username');
        window.sessionStorage.removeItem('role');
        window.sessionStorage.clear();
        // window.location.reload(false);
        navigate("/");

    };


    // -------------------------------------------------------------------------


    return (
        <div>

            {flag &&
                <div >
                    <div className="pagetitle" style={{ marginLeft: '25px', marginTop: '100px', }}>
                        <h1>Register Complaint</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item"><a href="/citizendashboard">Citizen Dashboard</a></li>
                                <li className="breadcrumb-item active">Register Complaint</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <MDBContainer fluid className='h-custom' >

                        <MDBRow className='d-flex justify-content-center align-items-center h-100'>

                            <MDBCol col='12' className='m-5'>

                                <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>

                                    <MDBCardBody className='p-0'>

                                        <MDBRow>

                                            <MDBCol md='6' className='p-5 bg-white'>

                                                <h3 className="fw-normal mb-5" style={{ color: '#4835d4' }}> <b>REGISTER COMPLAINT</b></h3>

                                                <MDBRow>

                                                    <select
                                                        className="form-control form-control-lg"
                                                        name="complaint"
                                                        onChange={setValues}
                                                        required
                                                    // item.governmentDepartmentEntity.government_department_name
                                                    >
                                                        <option key={1} value="selectdept" disabled selected>Complaint Category</option>
                                                        {complaint.map((item) => (
                                                            <option key={item.complaint_category_name} value={item.complaint_category_name} >
                                                                {item.complaint_category_name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </MDBRow>
                                                <br />
                                                <br />

                                                <MDBRow>
                                                    <h6>Department</h6>
                                                    <MDBInput
                                                        wrapperclass='mb-4'
                                                        className='form-control form-control-lg'

                                                        size='lg'
                                                        id='form3'
                                                        type='text'
                                                        name='image'
                                                        value={selectdept}
                                                    // onChange={(e) => { (e.target.value) }}
                                                    />
                                                </MDBRow>

                                                <MDBRow>
                                                    <h6>Complaint Description</h6>
                                                    <textarea
                                                        className="md-textarea "
                                                        wrapperclass='mb-4'

                                                        labelClass='text-white'
                                                        name='complaintdescription'
                                                        // label='Complaint Description'
                                                        placeholder='Complaint Description'
                                                        size='lg'
                                                        id='form7'
                                                        type='textarea'

                                                        onChange={(e) => { setComplaintdescription(e.target.value); console.log(e.target.value) }}
                                                    />

                                                </MDBRow>



                                                <MDBRow>
                                                    <h6>Complaint Landmark</h6>
                                                    <MDBInput
                                                        wrapperclass='mb-4'
                                                        className="md-textarea form-control-lg"

                                                        labelClass='text-white'
                                                        name='landmark'
                                                        // label='Complaint Landmark'
                                                        placeholder='Complaint Landmark'
                                                        size='lg'
                                                        id='form7'
                                                        type='text'

                                                        onChange={(e) => { setLandmark(e.target.value) }}
                                                    />
                                                </MDBRow>


                                            </MDBCol>
                                            <MDBCol md='6' className='bg-indigo p-5'>
                                                <MDBRow>
                                                    <h6>Complaint Latitude</h6>
                                                    <MDBInput
                                                        wrapperclass='mb-4'
                                                        className="md-textarea form-control-lg"

                                                        labelClass='text-white'
                                                        name='latitude'
                                                        // label='Complaint Landmark'
                                                       
                                                        size='lg'
                                                        id='form7'
                                                        type='text'
                                                        placeholder={ lat }
                                                        // onChange={(e) => { setLatitude(e.target.value) }}
                                                    />
                                                </MDBRow>

                                                <MDBRow>
                                                    <h6>Complaint Longitude</h6>
                                                    <MDBInput
                                                        wrapperclass='mb-4'
                                                        className="md-textarea form-control-lg"

                                                        labelClass='text-white'
                                                        name='longitude'
                                                        // label='Complaint Longitude'
                                                        
                                                        size='lg'
                                                        id='form7'
                                                        type='text'
                                                        placeholder={ lng }
                                                    // onChange={(e) => { setLongitude(e.target.value) }}
                                                    />
                                                </MDBRow>

                                                <br />

                                                {/* <h3 className="fw-normal mb-5 text-white" style={{ color: 'blue' }}>Contact Details</h3> */}
                                                <MDBInput
                                                    wrapperclass='mb-4'
                                                    className='form-control form-control-lg'
                                                    label='Upload Image'
                                                    size='lg'
                                                    id='form3'
                                                    type='file'
                                                    name='image'
                                                    onChange={convertImage}
                                                />

                                                <MDBRow>
                                                    <select
                                                        wrapperclass='mb-4'
                                                        className="md-textarea form-control-lg"

                                                        name="priority"
                                                        onChange={(e) => { setPriority(e.target.value) }}
                                                        required
                                                    >
                                                        <option key={1} value="selectPriority" disabled selected>Priority</option>

                                                        <option value="minor" >Minor </option>
                                                        <option value="moderate">Moderate</option>
                                                        <option value="critical">Critical</option>

                                                    </select>
                                                </MDBRow>

                                                <hr />

                                                <MDBBtnGroup className='align-items-center' shadow='5' aria-label='Basic example'>
                                                    {status}
                                                    <MDBBtn
                                                        className="md-textarea form-control-lg"
                                                        size='lg'
                                                        onClick={getLocation}
                                                        color='danger'
                                                        >
                                                        Get Location
                                                    </MDBBtn>

                                                    <MDBBtn
                                                        className="md-textarea form-control-lg"
                                                        size='lg'
                                                        onClick={check}
                                                        color='warning'
                                                        >
                                                        Register
                                                    </MDBBtn>
                                                </MDBBtnGroup>

                                            </MDBCol>

                                        </MDBRow>

                                        {/* <<<<<<<<<<<<<<<< Google Map >>>>>>>>>>>>>>>> */}
                                        <MDBRow>

                                        </MDBRow>

                                    </MDBCardBody>

                                </MDBCard>

                            </MDBCol>

                        </MDBRow>

                    </MDBContainer>
                </div>
            }
        </div>
    );
}
