import React, { useEffect, useState } from 'react';


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
import { useDispatch } from 'react-redux';

function AdminLogin() {

  let [store, setStore] = useState({
    username: '',
    password: ''
  });

  let navigate = useNavigate();
  let dispatch = useDispatch();

  let [admin, setAdmin] = useState({
    admin_id: "",
    admin_username: "",
    admin_password: "",
    admin_profile_image: ""
  });


  let home = () => navigate("/");

  const setValues = (e) => {
    let field = e.target.value;
    console.log(field);
    if (field.length === 0) {
      alert(field + ' must not be empty..');
    } else {
      setStore({ ...store, [e.target.name]: e.target.value });
      console.log(store.username);

    }
  }

 

  const validate = (e) => {

    console.log(store.username);

    axios.get(`http://localhost:8080/admin/getbyname/${store.username}/${store.password}`, {})
      .then((resolve) => {

        console.log(resolve.data.admin_password);
        if (resolve.data.admin_password === store.password ) {

          console.log(resolve.data.admin_username);
          console.log(resolve.data.admin_username);

    // -------------------------------------------------------------- Session Management ------------------------
          window.sessionStorage.setItem('username', JSON.stringify(store.username));
          window.sessionStorage.setItem('role', 'ADMIN');

          // ---------------------------------------------------------------------------------

          setAdmin({
            admin_id: resolve.data.admin_id,
            admin_username: resolve.data.admin_username,
            admin_password: resolve.data.admin_password,
            // admin_profile_image: imageUrl
          });

          // ------------------------------- Session Management

          alert("Successfully logged in..");
          navigate("/admindashboard");

        }
        else{
          alert("Please enter correct credentials..");
        }

      }).catch((reject) => {
        alert("Please enter correct credentials..");
        navigate("/adminlogin")
        console.log(reject)
      })
  }


  // -----------------------------------


  return (
    <div>
      <div className='App-center '>
        <button onClick={home}
          color='secondary' variant='contained'
        >Home</button>
        <MDBContainer className=" my-5 ">

          <MDBCard>
            <MDBRow className='g-0'>

              <MDBCol md='6'>
                <MDBCardImage src='https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1662883536~exp=1662884136~hmac=2d591f5673db386848608cda9e4942a967e387bd2217165f98a4fc54d7b5716b' alt="login form" className='rounded-start w-100' />
              </MDBCol>

              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>

                  <div className='d-flex flex-row mt-2'>
                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                    <span className="h1 fw-bold mb-0">Admin Login</span>
                  </div>

                  <h4 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h4>

                  <MDBInput onChange={setValues} wrapperClass='mb-4' label='Username' id='username' name='username' type='text' size="lg" />
                  <MDBInput onChange={setValues} wrapperClass='mb-4' label='Password' id='password' name='password' type='password' size="lg" />

                  <MDBBtn onClick={validate} className="mb-4 px-5" color='primary' size='lg'>Login</MDBBtn>
                  <p><a className="small text-muted" href="/forgetpassword">Forgot password?</a></p>

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


    

    </div >
  );
}

export default AdminLogin;