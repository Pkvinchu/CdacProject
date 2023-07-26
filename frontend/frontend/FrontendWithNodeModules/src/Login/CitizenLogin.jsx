import React, { useEffect, useState } from 'react';
import './Color.css'
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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function CitizenLogin() {


  let navigate = useNavigate();

  let [sessionData, setSessionData] = useState({
    username: '',
    password: ''
  })


  let citizenRegister = () => { navigate("/citizenregistration") }

  let setValues = (e) => {
    setSessionData({ ...sessionData, [e.target.name]: e.target.value });
    console.log(sessionData.username, " - ", sessionData.password);
  }

  const validate = () => {

    console.log(sessionData.username, " - ", sessionData.password);

    axios.get(`http://localhost:8080/user/getbyusername/${sessionData.username}/${sessionData.password}`, {})
      .then((response) => {

        console.log(response.data);
        // window.sessionStorage.setItem( 'user', JSON.stringify(response.data));
        if (response.data.user_password === sessionData.password && response.data.user_role == 'CITIZEN') {

          sessionStorage.setItem('username', JSON.stringify(sessionData.username));
          sessionStorage.setItem('id', JSON.stringify(response.data.user_id));
          sessionStorage.setItem('role', 'CITIZEN');


          console.log(response.data.userUsername);

          console.log("Session", JSON.parse(sessionStorage.getItem('username')));
          console.log("Session", JSON.parse(sessionStorage.getItem('id')));
          console.log("Session", (sessionStorage.getItem('role')));


          alert("Successfully logged in..");
          navigate("/citizendashboard");

        }
        else {
          alert("Please enter correct credentials..");
        }
      }).catch((reject) => {
        alert("Please enter correct credentials..");
        navigate("/citizenlogin")
        console.log(reject);
      })

    // ---------------------------------------------------------------------------------


  }




  return (
    <div className='App-center' style={{ marginTop: '100px' }}>

      <MDBContainer className=" my-5 ">

        <MDBCard>
          <MDBRow className='g-0'>

            <MDBCol md='6'>
              <MDBCardImage src='https://www.liveagent.com/app/uploads/2020/08/img-login.svg?v=2021-06-25' alt="login form" className='rounded-start w-100' />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>

                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                  <span className="h1 fw-bold mb-0">Citizen Login</span>
                </div>

                <h4 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h4>

                <MDBInput onChange={setValues} wrapperClass='mb-4' label='Username' id='username' name='username' type='text' size="lg" />
                <MDBInput onChange={setValues} wrapperClass='mb-4' label='Password' id='password' name='password' type='password' size="lg" />

                <MDBBtn onClick={validate} className="mb-4 px-5" color='primary' size='lg'>Login</MDBBtn>
                <a className="small text-muted" href="/forgotpassuser">Forgot password?</a>
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <button variant='text' onClick={citizenRegister} sx={{ textTransform: 'none', color: '#393f81' }}>
                  Register here
                </button></p>

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
  );
}

export default CitizenLogin;