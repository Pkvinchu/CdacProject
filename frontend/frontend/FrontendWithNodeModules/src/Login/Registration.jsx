import React, { useState } from 'react';

import './Color.css'
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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Registration() {

  let navigate = useNavigate();
  let home = () => { navigate("/") }
  let citizenLogin = () => { navigate("/citizen/login") }

  const [ok, setOK] = useState(false);

  const [allValues, setAllValues] = useState({
    user_aadhar_number: '',
    user_address_city: 'Pune',
    user_address_state: 'Maharashtra',
    user_contact_number: '',
    user_email: '',
    user_first_name: '',
    user_last_name: '',
    user_middle_name: '',
    user_password: '',
    user_pincode: '',
    user_role: 'CITIZEN',
    userUsername: '',
    user_department:'USER'
  });

  let [oneFile, setOneFile] = useState({ image: undefined });

  const setValues = (e) => {
    let field = e.target.value;
    if (field.length === 0) {
      alert(field + ' must not be empty..')
    } else {
      setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }
  }

    // -------------------------------------------- Set Image
    const setImage = (e) => {
      e.preventDefault();
      let field = e.target.files[0];

      setOneFile({ image: e.target.files[0] });
      console.log(oneFile.image);

  }

  // const readFileDataAsBase64 = (e) => {

  //   let file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     console.log(reader.result);
  //     setAllValues({ ...allValues, ['user_profile_image']: reader.result });
  //   }

  //   reader.readAsDataURL(file);
  //   console.log(allValues.user_profile_image);
  // }


  const createAccount = (e) => {
    console.log(allValues);

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
      .then((response) => {

        console.log(response.data);

        
          alert('Account created with Username=' + allValues.userUsername);
          navigate('/citizenlogin');
      
        
      }).catch((error) => {
        alert('Account creation failed')
        console.log(error);
      })
  }



  return (
    <div>

      <MDBContainer fluid className='h-custom'>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>

          <MDBCol col='12' className='m-5'>

            <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>

              <MDBCardBody className='p-0'>

                <MDBRow>

                  <MDBCol md='6' className='p-5 bg-white'>

                    <h3 className="fw-normal mb-5" style={{ color: '#4835d4' }}>General Infomation</h3>


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
                      id='form3'
                      type='file'
                      name='image'
                      onChange={setImage}
                    // onBlur={(e) => { setimage(e.target.value) }}
                    />

                    <MDBRow>

                      <MDBCol md='6'>
                        <MDBInput
                          wrapperClass='mb-4'
                          label='Username*'
                          name='userUsername'
                          size='lg'
                          id='form1'
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
                          id='form2'
                          type='password'
                          onChange={setValues}
                        />
                      </MDBCol>

                    </MDBRow>

                  </MDBCol>


                  <MDBCol md='6' className='bg-indigo p-5'>

                    <h3 className="fw-normal mb-5 text-white" style={{ color: '#4835d4' }}>Contact Details</h3>

                    <MDBInput
                      wrapperClass='mb-4'
                      labelClass='text-white'
                      name='user_address_state'
                      label='State'
                      size='lg'
                      id='form5'
                      type='text'
                      disabled="true"
                      placeholder="Maharashtra"
                      value="Maharashtra"
                      onChange={setValues}
                    />

                    <MDBRow>

                      <MDBCol md='5'>
                        <MDBInput
                          wrapperClass='mb-4'
                          labelClass='text-white'
                          name='user_pincode'
                          label='Pin Code'
                          size='lg'
                          id='form6'
                          type='number'
                          onChange={setValues}
                        />
                      </MDBCol>

                      <MDBCol md='7'>
                        <MDBInput
                          wrapperClass='mb-4'
                          labelClass='text-white'
                          name='user_address_city'
                          label='City'
                          size='lg'
                          id='form7'
                          type='text'
                          disabled="true"
                          placeholder="Pune"
                          value="Pune"
                          onChange={setValues}
                        />
                      </MDBCol>

                    </MDBRow>


                    <MDBRow>

                      <MDBCol md='12'>
                        <MDBInput
                          wrapperClass='mb-4'
                          labelClass='text-white'
                          name='user_contact_number'
                          label='Phone Number'
                          size='lg'
                          id='form10'
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
                      id='form8'
                      type='email'
                      onChange={setValues}
                    />


                    {/* <MDBBtnGroup className='align-items-center' shadow='5' aria-label='Basic example'> */}
                    <button
                      style={{ backgroundColor: 'navy', color: 'white', borderRadius: '10px', paddingLeft: '20px', paddingRight: '20px' }}
                      onClick={createAccount}
                      color='dark'
                      outline>
                      Register
                    </button>
                    {/* </MDBBtnGroup> */}


                  </MDBCol>

                </MDBRow>

              </MDBCardBody>

            </MDBCard>

          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </div>
  );
}

export default Registration;