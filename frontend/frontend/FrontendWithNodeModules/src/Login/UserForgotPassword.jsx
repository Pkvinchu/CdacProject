
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import axios from 'axios';


function UserForgotPassword() {

    let navigate = useNavigate();
    let [username, setUsername] = useState("");
    let [flag, setFlag] = useState(false)
    let [password, setPasssword] = useState("");

    const getpassword = () => {

        console.log(username);
        axios.get(`http://localhost:8080/user/getpassword/${username}`).then((resolve) => {
            setFlag(true);
            console.log(resolve.data);
            setPasssword(resolve.data)
            alert('your password : ' + resolve.data);
            navigate('/')

        }).catch((reject) => {
            console.log(reject);
            alert("invalid username...!! please enter valid username");
        })

    }
    return (
        <div>
            <MDBContainer className=" my-5 ">

                <MDBCard>
                    <MDBRow className='g-0'>

                        <MDBCol md='6'>
                            <MDBCardImage src='https://img.freepik.com/premium-vector/forgot-password-concept-isolated-white_263070-194.jpg?w=740' alt="login form" className='rounded-start w-100' />
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>

                                <div className='d-flex flex-row mt-2'>
                                    <MDBIcon fas icon="fas fa-bell-slash fa-spin fa-pulse fa-3x" style={{ color: '#ff6219' }} />
                                    <span className="h1 fw-bold mb-0">Forget Password</span>
                                </div><br/><br/>
                                <div>
                                    <MDBInput wrapperClass='mb-4' label='Username' id='username' name='username' type='text' size="lg" onChange={(e) => setUsername(e.target.value)} />

                                </div>
                                <div>
                                    <MDBBtn onClick={getpassword} className="mb-2 px-2" color='primary' size='lg'>Get Password</MDBBtn>
                                </div>


                                <div className='d-flex flex-row justify-content-start'>
                                    <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                </div>

                            </MDBCardBody>

                        </MDBCol>

                    </MDBRow>
                </MDBCard>

            </MDBContainer>
        </div>
    )
}

export default UserForgotPassword
