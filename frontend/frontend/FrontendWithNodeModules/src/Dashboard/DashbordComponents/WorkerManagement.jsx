import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
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



export default function WorkerManagement() {

    let [flag, setFlag] = useState(false);
    let [flag1, setFlag1] = useState(false);
    const [workers, setWorkers] = useState([]);

    let navigate = useNavigate();

    let addWorker = () => { navigate('/addofficialworker') }

    // ----------------------------------------------- Update User >>>>>>>>>>>>>

    let [state, setState] = useState("Maharashtra")
    let [city, setCity] = useState("Pune")
    let [role, setRole] = useState("WORKER")
    let [username, setUsername] = useState("")
    let [id, setId] = useState("")
    let [password, setPassword] = useState("")
    let [firstname, setFirstname] = useState("")
    let [middle, setMiddle] = useState("")
    let [lastname, setLastname] = useState("")
    let [aadhaar, setAadhaar] = useState("")
    let [pincode, setPincode] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")


    let getUsers = (e) => {

        setFlag(false);
        setFlag1(true); 

        let id = e.target.value;
        console.log(id);

        axios.get(`http://localhost:8080/user/getbyid/${id}`)
            .then((response) => {

                let resp = response.data;

                console.log(response)
                console.log(response.data)
                console.log(resp)

                setUsername(resp.userUsername)
                setPassword(resp.user_password)
                setAadhaar(resp.user_aadhar_number)
                setFirstname(resp.user_first_name)
                setMiddle(resp.user_middle_name)
                setLastname(resp.user_last_name)
                setEmail(resp.user_email)
                setPhone(resp.user_contact_number)
                setPincode(resp.user_pincode)
                setId(resp.user_id)

            })
            .catch((err) => {
                console.log(err);
            })

    }


    let updateUser = () => {

        setFlag(true);
        setFlag1(false);

        let item = {
            userUsername: username,
            user_password: password,
            user_aadhar_number: aadhaar,
            user_first_name: firstname,
            user_middle_name: middle,
            user_last_name: lastname,
            user_contact_number: phone,
            user_email: email,
            user_pincode: pincode,
            user_role: role,
            user_address_city: city,
            user_address_state: state
        }
        console.warn("item", item)

        axios.put(`http://localhost:8080/user/insert/${id}`, item)
            .then((response) => {

                console.log(response);
                alert("Official updated successfully..");
                window.location.reload(true);
            })
            .catch((err) => {

                console.log(err);
            })
    }


    // ----------------------------------------------------------------------------------------------------



    const deleteUser = (e) => {

        var id = e.target.value;
        console.log(id)

        axios.delete(`http://localhost:8080/admin/deleteuser/${id}`)
            .then((response) => {
                console.log(response.data);
                alert("Worker deleted..")
                window.location.reload(true)    // reloads the current page
            }).catch(error => {
                alert("Worker not found..")
                console.log(error);
            })
    }


    // ------------------------------------------------------------- Session Management


    useEffect(() => {

        const sessData = window.sessionStorage.getItem('username');
        const role = window.sessionStorage.getItem('role');
        console.log("Session console - ", sessData);
        console.log("Session Parsed - ", JSON.parse(sessData));

        if (sessData != '' && sessData != 'undefined' && sessData != null && role == 'ADMIN') {
            setFlag(true);


            axios.get('http://localhost:8080/user/get').then((response) => {

                let getData = response.data;

                var newArray = getData.filter((el) => {
                    return el.user_role == 'WORKER';
                })

                setWorkers(newArray);
                console.log(newArray);

            }).catch((error) => {
                console.log(error);

            })

        }
        else {
            navigate('/adminlogin')
        }

    });

    // ------------------------------------------------------ Image Decoder >>>>>>>>>>>>>>>>>>>>>>>>>>

    let imageConvertor = (e) => {
        const byteCharacters = atob(e);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        let image = new Blob([byteArray], { type: 'image/jpeg' });
        let imageUrl = URL.createObjectURL(image);
        return imageUrl;
    }

    // -------------------------------------------------------------------------

    return (
        <div>
            {flag &&
                <div>
                    <main id="main" className="main">

                        <div className="pagetitle">
                            <h1>Worker Management</h1>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/admindashboard">Admin Dashboard</a></li>
                                    <li className="breadcrumb-item active">Worker Management</li>
                                </ol>
                            </nav>
                        </div>{/* End Page Title */}
                        <MDBBtn color='' onClick={addWorker} outline >Add New Worker</MDBBtn>
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-12">

                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title"></h5>

                                            {/* Table with hoverable rows */}
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Profile</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Aadhar Card</th>
                                                        <th scope="col">Contact</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {workers.map(
                                                        worker =>
                                                            <tr key={worker.user_id}>
                                                                <th scope="row">{worker.user_id}</th>
                                                                <td>
                                                                    <div className='d-flex align-items-center'>
                                                                        <img
                                                                            src={imageConvertor(worker.user_profile_image)}
                                                                            alt=''
                                                                            style={{ width: '45px', height: '45px' }}
                                                                            className='rounded-circle'
                                                                        />
                                                                    </div></td>
                                                                <td>{worker.user_first_name}&nbsp;{worker.user_last_name}</td>
                                                                <td>{worker.user_aadhar_number}</td>
                                                                <td>{worker.user_contact_number}</td>
                                                                <td>
                                                                    <center>
                                                                        <td className="text-center">
                                                                            <button className="btn btn-success" value={worker.user_id} onClick={getUsers} >Update Worker</button>
                                                                        </td>
                                                                        {/* <td className="text-center">
                                                                            <button className="btn btn-danger" value={worker.user_id} onClick={deleteUser} >
                                                                                Delete
                                                                            </button>
                                                                        </td> */}
                                                                    </center>
                                                                </td>
                                                            </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                            {/* End Table with hoverable rows */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>{/* End #main */}
                </div>
            }

            {flag1 &&
                <div>
                    <MDBContainer fluid className='h-custom'>

                        <MDBRow className='d-flex justify-content-center align-items-center h-100'>

                            <MDBCol col='6' className='m-5' style={{ borderRadius: '15px', display: 'flex', justifyContent: 'end' }}>

                                <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px', display: 'flex', justifyContent: 'end' }}>

                                    <MDBCardBody className='p-0'>

                                        <MDBRow>

                                            <MDBCol md='5' className='p-5 bg-white'>

                                                <h3 className="fw-normal mb-5" style={{ color: '#4835d4' }}>Update Infomation</h3>

                                                <MDBRow>
                                                    <MDBCol md='6'>
                                                        <MDBInput
                                                            wrapperClass='mb-4'
                                                            label='First Name'
                                                            size='lg' id='form1'
                                                            type='text'
                                                            name='firstname'
                                                            placeholder={firstname}
                                                            onBlur={(e) => { if (e.target.value.length != 0) setFirstname(e.target.value) }}
                                                        />
                                                    </MDBCol>

                                                    <MDBCol md='6'>
                                                        <MDBInput
                                                            wrapperClass='mb-4'
                                                            label='Middle Name'
                                                            name='middle'
                                                            size='lg'
                                                            // id='form2'
                                                            type='text'
                                                            placeholder={middle}
                                                            onBlur={(e) => { if (e.target.value.length != 0) setMiddle(e.target.value) }}
                                                        />
                                                    </MDBCol>

                                                </MDBRow>


                                                <MDBRow>

                                                    <MDBCol md='6'>
                                                        <MDBInput
                                                            wrapperClass='mb-4'
                                                            label='Last Name'
                                                            name='lastname'
                                                            size='lg'
                                                            // id='form3'
                                                            type='text'
                                                            placeholder={lastname}
                                                            onBlur={(e) => { if (e.target.value.length != 0) setLastname(e.target.value) }}
                                                        />
                                                    </MDBCol>

                                                    <MDBCol md='6'>
                                                        <MDBInput
                                                            wrapperClass='mb-4'
                                                            label='Aadhaar Number'
                                                            name='aadhaar'
                                                            size='lg'
                                                            // id='form4'
                                                            type='number'
                                                            placeholder={aadhaar}
                                                            onBlur={(e) => { if (e.target.value.length != 0) setAadhaar(e.target.value) }}
                                                        />
                                                    </MDBCol>

                                                </MDBRow>


                                                <MDBInput
                                                    wrapperClass='mb-4'
                                                    className='form-control form-control-lg'
                                                    label='Profile Image'
                                                    size='lg'
                                                    // id='form3'
                                                    type='file'
                                                    name='image'
                                                // placeholder={}
                                                // onChange={changeHandler}
                                                // onBlur={(e) => { setimage(e.target.value) }}
                                                />

                                                <MDBRow>

                                                    <MDBCol md='6'>
                                                        <MDBInput
                                                            wrapperClass='mb-4'
                                                            label='Username*'
                                                            name='username'
                                                            size='lg'
                                                            // id='form1'
                                                            type='text'
                                                            placeholder={username}
                                                            onBlur={(e) => { if (e.target.value.length != 0) setUsername(e.target.value) }}
                                                        />
                                                    </MDBCol>

                                                    <MDBCol md='6'>
                                                        <MDBInput
                                                            wrapperClass='mb-4'
                                                            label='Password*'
                                                            name='password'
                                                            size='lg'
                                                            // id='form2'
                                                            type='password'
                                                            placeholder={password}
                                                            onBlur={(e) => { if (e.target.value.length != 0) setPassword(e.target.value) }}
                                                        />
                                                    </MDBCol>

                                                </MDBRow>

                                            </MDBCol>


                                            <MDBCol md='5' className='bg-indigo p-5'>

                                                <h3 className="fw-normal mb-5 text-white" style={{ color: '#4835d4' }}></h3>

                                                <MDBInput
                                                    wrapperClass='mb-4'
                                                    labelClass='text-white'
                                                    name='state'
                                                    label='State'
                                                    size='lg'
                                                    // id='form5'
                                                    type='text'
                                                    disabled="true"
                                                    placeholder="Maharashtra"
                                                    onBlur={(e) => { if (e.target.value.length != 0) setState(e.target.value) }}
                                                />

                                                <MDBRow>

                                                    <MDBCol md='5'>
                                                        <MDBInput
                                                            wrapperClass='mb-4'
                                                            labelClass='text-white'
                                                            name='pin'
                                                            label='Pin Code'
                                                            size='lg'
                                                            // id='form6'
                                                            type='number'
                                                            placeholder={pincode}
                                                            onBlur={(e) => { if (e.target.value.length != 0) setPincode(e.target.value) }}
                                                        />
                                                    </MDBCol>

                                                    <MDBCol md='7'>
                                                        <MDBInput
                                                            wrapperClass='mb-4'
                                                            labelClass='text-white'
                                                            name='city'
                                                            label='City'
                                                            size='lg'
                                                            // id='form7'
                                                            type='text'
                                                            disabled="true"
                                                            placeholder="Pune"
                                                            onBlur={(e) => { if (e.target.value.length != 0) setCity(e.target.value) }}
                                                        />
                                                    </MDBCol>

                                                </MDBRow>


                                                <MDBRow>

                                                    <MDBCol md='12'>
                                                        <MDBInput
                                                            wrapperClass='mb-4'
                                                            labelClass='text-white'
                                                            name='phone'
                                                            label='Phone Number'
                                                            size='lg'
                                                            // id='form10'
                                                            type='number'
                                                            placeholder={phone}
                                                            onBlur={(e) => { if (e.target.value.length != 0) setPhone(e.target.value) }}
                                                        />
                                                    </MDBCol>

                                                </MDBRow>


                                                <MDBInput
                                                    wrapperClass='mb-4'
                                                    labelClass='text-white'
                                                    name='email'
                                                    label='Your Email'
                                                    size='lg'
                                                    // id='form8'
                                                    type='email'
                                                    placeholder={email}
                                                    onBlur={(e) => { if (e.target.value.length != 0) setEmail(e.target.value) }}
                                                />

                                                {/* <MDBCheckbox
                                                    name='flexCheck'
                                                    id='flexCheckDefault'
                                                    labelClass='text-white mb-4'
                                                    label='I do accept the Terms and Conditions of your site.'
                                                /> */}


                                                <MDBBtnGroup className='align-items-center' shadow='5' aria-label='Basic example'>
                                                    <MDBBtn
                                                        size='lg'
                                                        onClick={updateUser}
                                                        color='light'
                                                        outline>
                                                        Update
                                                    </MDBBtn>
                                                </MDBBtnGroup>


                                            </MDBCol>

                                        </MDBRow>


                                    </MDBCardBody>

                                </MDBCard>

                            </MDBCol>

                        </MDBRow>

                    </MDBContainer>
                </div>
            }




            {/* ======= Footer ======= */}
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span>Admin</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                    Designed by <a href="https://bootstrapmade.com/"></a>
                </div>
            </footer>{/* End Footer */}

        </div>
    )
}
