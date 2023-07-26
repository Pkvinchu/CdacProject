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

function OfficialLogin() {

  let navigate = useNavigate();

  let [username, setUsername] = useState();
  let [password, setPassword] = useState();
  let [sessionData, setSessionData] = useState({
    username: '',
    password: ''
  })

  let home = () => navigate("/");


  let setValues = (e) => {
    setSessionData({ ...sessionData, [e.target.name]: e.target.value });
    console.log(sessionData.username, " - ", sessionData.password);
  }

  const validate = () => {

    console.log(sessionData.username, " - ", sessionData.password);

    axios.get(`http://localhost:8080/user/getbyusername/${sessionData.username}/${sessionData.password}`, {})
      .then((response) => {

        console.log(response.data);

        if (response.data.user_password === sessionData.password && response.data.user_role == 'OFFICIAL') {

          sessionStorage.setItem('username', JSON.stringify(sessionData.username));
          sessionStorage.setItem('id', JSON.stringify(response.data.user_id));
          sessionStorage.setItem('role', 'OFFICIAL');
          sessionStorage.setItem('department', JSON.stringify(response.data.userdepartment));

          console.log(response.data.userUsername);

          console.log("Session", JSON.parse(sessionStorage.getItem('username')));
          console.log("Session", (sessionStorage.getItem('role')));

          alert("Successfully logged in..");
          navigate("/officialdashboard");

        }
        else {
          alert("Please enter correct credentials..");
        }

      }).catch((reject) => {

        alert("Please enter correct credentials..");
        navigate("/officiallogin")
        console.log(reject);
      })
  }
   // ---------------------------------------------------------------------------------



  return (
    <body className='App-center'>
      <button onClick={home} sx={{ m: '10px' }}
        color='secondary' variant='contained'
      >Home</button>
      <MDBContainer className=" my-5 ">

        <MDBCard>
          <MDBRow className='g-0'>

            <MDBCol md='6'>
              <MDBCardImage src='https://ecurater.com/wp-content/uploads/2020/10/login1.png' alt="login form" className='rounded-start w-100' />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>

                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                  <span className="h1 fw-bold mb-0" style={{ marginTop: '50px' }} >Official Login</span>
                </div>

                <h4 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h4>

                <MDBInput onChange={setValues} wrapperClass='mb-4' label='Username' name='username' id='username' type='text' size="lg" />
                <MDBInput onChange={setValues} wrapperClass='mb-4' label='Password' name='password' id='password' type='password' size="lg" />

                <MDBBtn onClick={validate} className="mb-4 px-5" color='primary' size='lg'>Login</MDBBtn>
                <p><a className="small text-muted" href="/forgotpassuser">Forgot password?</a></p>
                {/* <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p> */}

                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </div>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </MDBCard>

      </MDBContainer>
    </body>
  );
}

export default OfficialLogin;