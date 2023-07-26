
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MDBBadge, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function ComplaintEnquiry() {

    let navigate = useNavigate();
    let [flag, setFlag] = useState(false);  // used for conditional rendering

    let home = () => { navigate("/") }
    let citizenRegister = () => { navigate("/citizen/registration") }
  

    // ------------------------------------------------------------------------------- fetch data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    let [oneFile, setOneFile] = useState({ image: undefined });

    // -------------------------------------------------------------- Show Complaint Status

    // -------------------------------------------------------------- Edit this if Complaint with image needed >>>>>>>>>

    // const getAdmin = (e) => {
    //     setFlag(true)

    //     axios.get(`http://localhost:8080/complaintinfo/getbyid/${complaint_id}`, {})
    //         .then((resolve) => {
    //             console.log(resolve.data[0]);

    //             const byteCharacters = atob(resolve.data[0].admin_profile_image);
    //             const byteNumbers = new Array(byteCharacters.length);
    //             for (let i = 0; i < byteCharacters.length; i++) {
    //                 byteNumbers[i] = byteCharacters.charCodeAt(i);
    //             }
    //             const byteArray = new Uint8Array(byteNumbers);

    //             let image = new Blob([byteArray], { type: 'image/jpeg' });
    //             let imageUrl = URL.createObjectURL(image);
    //             console.log(imageUrl);
    //             setAdmin({
    //                 admin_id: resolve.data[0].admin_id,
    //                 admin_username: resolve.data[0].admin_username,
    //                 admin_password: resolve.data[0].admin_password,
    //                 admin_profile_image: imageUrl
    //             });

    //             alert("Data fetched successfully");
    //         }).catch((reject) => {
    //             console.log(reject)
    //         })
    // }

    // ------------------------------------------------------------------------- Get Complaint By Id >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    
    let [complaintsInfo, setComplaintsInfo] = useState({
        complaintId: undefined,
        citizenImage: undefined,
        citizenFName: '',
        citizenLName:'',
        complaintCategory: '',
        complaintDept: '',
        complaintDesc: '',
        receivedDate:'',
        resolvedDate:'',
        complaintStatus: ''
    });

    const showStatus = () => {

        if (complaintsInfo.complaintId === undefined) {
            alert("Complaint id must be provided");
        }
        else {
           
        axios.get(`http://localhost:8080/complaintinfo/getbyid/${complaintsInfo.complaintId}`, {})
            .then((res) => {
                let getData = res.data;
                console.log(getData);

                const byteCharacters = atob(getData.userProfileEntity.user_profile_image);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);

                let image = new Blob([byteArray], { type: 'image/jpeg' });
                let imageUrl = URL.createObjectURL(image);

                setComplaintsInfo({
                    complaintId: getData.complaint_id,
                    citizenImage: imageUrl,
                    citizenFName: getData.userProfileEntity.user_first_name,
                    citizenLName: getData.userProfileEntity.user_last_name,
                    complaintCategory: getData.complaint_category,
                    complaintDept: getData.complaint_department,
                    complaintDesc: getData.complaint_description,
                    receivedDate: getData.complaint_received_date,
                    resolvedDate: getData.complaint_resolved_date,
                    complaintStatus: getData.complaint_status
                })
                
                setFlag(true);

                
            }).catch((err) => {
                console.log(err);
                alert("Data is not available..")
            });
        }
            
    };

    // ------------------------------------------------------------------------- Get Complaint By Id >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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

    return (
        <div className="main_container App">




            <MDBContainer className=" my-5 ">
                <MDBCard>
                    <MDBRow className='g-0'>

                        <MDBCol md='6'>
                            <MDBCardImage src='https://clausmoller.com/wp-content/uploads/2020/09/Complaint-AS_popup.jpg' alt="login form" className='rounded-start w-100' />
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>

                                <div className='d-flex flex-row mt-2'>
                                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                    <span style={{ paddingLeft: '64px' }} className="h1 fw-bold mb-0">Complaint Enquiry</span>
                                </div>

                                <h4 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Please enter your complaint number</h4>

                                <MDBInput onChange={(e) => {setComplaintsInfo({complaintId :e.target.value}); setFlag(false) }} wrapperClass='mb-4' label='Complaint Number' id='complaint_id' type='number' size="lg" required />

                                <button onClick={showStatus} className="" style={{ backgroundColor: 'navy', color: 'white', borderRadius: '10px' }} size='lg'>Show Status</button>
                                <p><a className="small text-muted" href="#!">Forgot password?</a></p>
                                {/* <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p> */}

                            </MDBCardBody>
                        </MDBCol>

                    </MDBRow>
                </MDBCard>

                <MDBCard>
                    <MDBRow>


                        {/* -------------------------- Conditional Rendering -------------------------- */}
                        {flag &&

                            <div>


                                <div class="container padding-bottom-3x mb-1">

                                    <div class="card mb-3">
                                        <div class="p-4 text-center text-white text-lg bg-dark rounded-top">
                                            <h1>Complaint Status</h1>
                                            <span class="text-uppercase">Tracking Complaint No - </span>
                                            <span class="text-medium">{complaintsInfo.complaintId}</span>
                                        </div>
                                        {/* <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                <div class="w-100 text-center py-1 px-2"><span class="text-medium">Shipped Via:</span> UPS Ground</div>
                <div class="w-100 text-center py-1 px-2"><span class="text-medium">Status:</span> Checking Quality</div>
                <div class="w-100 text-center py-1 px-2"><span class="text-medium">Expected Date:</span> APR 27, 2021</div>
              </div> */}
                                        <div class="card-body">
                                            <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                                                {/* <div class="step completed">
                    <div class="step-icon-wrap">
                      <div class="step-icon"><i class="pe-7s-cart"></i></div>
                    </div>
                    <h4 class="step-title">Received</h4>
                  </div>
                  <div class="step completed">
                    <div class="step-icon-wrap">
                      <div class="step-icon"><i class="pe-7s-config"></i></div>
                    </div>
                    <h4 class="step-title">Pending</h4>
                  </div>

                  <div class="step completed">
                    <div class="step-icon-wrap">
                      <div class="step-icon"><i class="pe-7s-medal"></i></div>
                    </div>
                    <h4 class="step-title">In Progress</h4>
                  </div>

                  <div class="step">
                    <div class="step-icon-wrap">
                      <div class="step-icon"><i class="pe-7s-car"></i></div>
                    </div>
                    <h4 class="step-title">Completed</h4>
                  </div>

                  <div class="step">
                    <div class="step-icon-wrap">
                      <div class="step-icon"><i class="pe-7s-home"></i></div>
                    </div>
                    <h4 class="step-title">Rejected</h4>
                  </div> */}

                                                <MDBTable align='middle' >
                                                    <MDBTableHead>
                                                        <tr>
                                                            <th scope='col'>Citizen Name</th>
                                                            <th scope='col'>Date</th>
                                                            <th scope='col'>Complaint Category</th>
                                                            <th scope='col'>Description</th>
                                                            <th scope='col'>Status</th>
                                                            {/* <th scope='col'>Actions</th> */}
                                                        </tr>
                                                    </MDBTableHead>
                                                    <MDBTableBody className='justify-content-start' >
                                                       
                                                        <tr>
                                                            <td>
                                                                <div className='d-flex align-items-center'>
                                                                    <img
                                                                        src={complaintsInfo.citizenImage}
                                                                        alt=''
                                                                        style={{ width: '45px', height: '45px' }}
                                                                        className='rounded-circle'
                                                                    />
                                                                    <div className='ms-3'>
                                                                        <p className='fw-bold mb-1'>{complaintsInfo.citizenFName}&nbsp;{complaintsInfo.citizenLName}</p>
                                                                        {/* <p className='text-muted mb-0'>sanket.jadhav@gmail.com</p> */}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <pre className='fw-normal mb-1'>Received :{complaintsInfo.receivedDate}</pre>
                                                                <pre className='fw-normal mb-1'>Resolved :{complaintsInfo.resolvedDate}</pre>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>{complaintsInfo.complaintCategory}</p>
                                                                <p className='text-muted mb-0'>{complaintsInfo.complaintDept}</p>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>{complaintsInfo.complaintDesc}</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='success' pill>
                                                                    {complaintsInfo.complaintStatus}
                                                                </MDBBadge>
                                                            </td>
                                                            {/* <td>Senior</td> */}
                                                        </tr>

                                                    </MDBTableBody>
                                                </MDBTable>

                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">

                  <div class="text-left text-sm-right"><a class="btn btn-outline-primary btn-rounded btn-sm" href="#">View Order Details</a></div>
                </div> */}
                                </div>
                            </div>
                        }
                        <div>
                            <div className='d-flex flex-row justify-content-start' style={{ padding: '20px' }}>
                                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </div>
                        </div>
                    </MDBRow>

                </MDBCard>
            </MDBContainer>
        </div>
    )
}
