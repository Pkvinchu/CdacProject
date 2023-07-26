import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtnGroup
}
    from 'mdb-react-ui-kit';



export default function WorkerComplaintList() {



    let [complaintsInfo, setComplaintsInfo] = useState([]);
    let [complaintId, setComplaintId] = useState();
    let [complaintstatus, setComplaintstatus] = useState('undefined');
    let [flag, setFlag] = useState(false);
    let [flag1, setFlag1] = useState(false);
    let [flag2, setFlag2] = useState(false);

    let navigate = useNavigate();

    let [values, setValues] = useState([{
        compId: undefined,
        compCat: '',
        compImage: undefined,
        compPriority: '',
        compStatus: ''
    }]);


    // ------------------------------------------------------ Get All Complaints >>>>>>>>>>>>>>>>>>>>>>>>>>

    useEffect(() => {

        const sessData = window.sessionStorage.getItem('username');
        const role = window.sessionStorage.getItem('role');
        console.log("Session console - ", sessData);
        console.log("Session Parsed - ", JSON.parse(sessData));

        if (sessData != '' && sessData != 'undefined' && sessData != null && role == 'WORKER') {
            setFlag(true);


            axios.get("http://localhost:8080/image/getall", {})
                .then((res) => {
                    let getData = res.data;
                    console.log(getData);


                    var newArray = getData.filter((el) => {
                        if (el.complaintInformationEntity.userProfileEntityWor != null)
                            return el.complaintInformationEntity.userProfileEntityWor.user_id == JSON.parse(sessionStorage.getItem('id')) &&
                                el.complaintInformationEntity.complaint_status != 'COMPLETED & CLOSED'
                    })

                    console.log(newArray);
                    setComplaintsInfo(newArray);

                }).catch((err) => {
                    console.log(err);
                    alert("Fetching image info failed..")
                });

        }
        else {
            navigate('/workerlogin');
        }

    }, []);

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

    // ------------------------------------------------------ Toggle >>>>>>>>>>>>>>>>>>>>>>>>>>

    const nav = (e) => {

        var val = e.target.value;
        setComplaintId(e.target.name);

        if (val === 'update') {
            setFlag1(true);
            setFlag2(false);
            setFlag(false);
        }
        else if (val === 'complete') {
            setFlag2(true);
            setFlag1(false);
            setFlag(false);
        }
    }

    const selectStatus = (e) => {
        console.log(e.target.value);
        if (e.target.value !== 'undefined')
            setComplaintstatus(e.target.value);
        else
            alert("Status must not be empty");

    }

    // ------------------------------------------------------ Set Status of Complaint ---------------------------------------

    const updateStatus = (e) => {

        e.preventDefault();

        setFlag(true);
        setFlag1(false);
        setFlag2(false);

        if (complaintstatus !== 'undefined')

            axios.put(`http://localhost:8080/complaintinfo/setstatus/${complaintId}/${complaintstatus}`, {})
                .then((response) => {
                    console.log(response.data);
                    alert("Setting status of complaint successfull..")
                    window.location.reload(true);



                }).catch((err) => {

                    console.log(err);
                    alert("Setting status of complaint failed..")
                });
        else {
            alert("Status must not be empty..");
        }
    }

    // ------------------------------------------------------ Setting Status AS Completed and Closing the Issue ---------------------------------------


    let [oneFile, setOneFile] = useState({ image: undefined });

    const setImage = (e) => {
        e.preventDefault();
        let field = e.target.files[0];

        setOneFile({ image: e.target.files[0] });
        console.log(oneFile.image);

    }

    const closeComplaint = (e) => {

        e.preventDefault();

        setFlag(true);
        setFlag1(false);
        setFlag2(false);

        // Create an object of formData
        const myFile = new FormData();

        // Update the formData object
        myFile.append(
            "myFile",
            oneFile.image
        );

        axios.put(`http://localhost:8080/complaintinfo/closecomplaint/${complaintId}`, myFile, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then((response) => {

                console.log(response.data);
                console.log("Complaint Addressed and Closed Successfully..");
                alert("Complaint Addressed and Closed Successfully..");
                window.location.reload(true);

            }).catch((err) => {

                console.log(err);
                alert("Complaint updation failed..")
            });
    }


    // ------------------------------------------------------------- Session Management


    // -------------------------------------------------------------------------

    return (
        <div style={{ margin: '20px', marginTop: '120px' }}>
            {/* >>>>>>>>>>>>>> Conditional Rendering <<<<<<<<<<<<<<< */}
            {flag &&
                <div >
                    <div className="pagetitle">
                        <h1>Complaint List</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item"><a href="/citizendashboard">Citizen Dashboard</a></li>
                                <li className="breadcrumb-item active">Complaint List</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <h2 className="text-center"></h2>
                    <div className="row">
                        {/* <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button> */}
                    </div>
                    <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Complaint Id</th>
                                    <th> Category</th>
                                    <th> Complaint Image</th>
                                    <th> Priority</th>
                                    <th> Status</th>
                                    <th> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    complaintsInfo.map((complaint) =>
                                        <tr key={complaint.complaintInformationEntity.complaint_id}>
                                            <td> {complaint.complaintInformationEntity.complaint_id}</td>
                                            <td>
                                                <pre>Dept        :{complaint.complaintInformationEntity.complaint_department}</pre>
                                                <pre>Category    :{complaint.complaintInformationEntity.complaint_category}</pre>
                                                <pre>Description :{complaint.complaintInformationEntity.complaint_description}</pre>
                                            </td>
                                            <td>
                                                <img src={imageConvertor(complaint.image)} width="100" height="120"></img>
                                            </td>
                                            <td> {complaint.complaintInformationEntity.complaint_priority}</td>
                                            <td> {complaint.complaintInformationEntity.complaint_status}</td>
                                            {/* <td> {comp.complaint_resolved_date}</td> */}
                                            <td style={{ fontSize: '10px', justifyContent: 'center' }}>
                                                <center>
                                                    <button type="button" style={{ fontSize: '10px' }} onClick={nav} name={complaint.complaintInformationEntity.complaint_id} value='update' className="btn btn-info">Update Status</button>&nbsp;
                                                    <button type="button" style={{ fontSize: '10px' }} onClick={nav} name={complaint.complaintInformationEntity.complaint_id} value='complete' className="btn btn-primary">Close Complaint</button>
                                                </center>
                                            </td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            }
            {/* ------------------------------ Conditional Rendering ------------------------------------ */}

            {(flag1 || flag2) &&
                <MDBContainer fluid className='h-custom'>
                    <MDBRow className='d-flex justify-content-center align-items-center '>
                        <MDBCol col='12' className='m-5'>
                            <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>
                                <MDBCardBody className='p-0'>
                                    <MDBRow>
                                        <MDBCol md='6' className='p-5 bg-white'>

                                            {flag1 &&
                                                <MDBRow>
                                                    <select
                                                        wrapperclass='mb-4'
                                                        className="form-control"
                                                        name="status"
                                                        onChange={selectStatus}
                                                        required
                                                    >
                                                        <option value='undefined'>-select-</option>

                                                        <option value="IN PROGRESS" >IN PROGRESS </option>
                                                        {/* <option value="COMPLETED & CLOSED">COMPLETED & CLOSED</option> */}
                                                    </select>
                                                </MDBRow>
                                            }
                                            <br />

                                            {flag2 &&
                                                <MDBInput
                                                    wrapperClass='mb-4'
                                                    className='form-control form-control-lg'
                                                    label='Upload Image'
                                                    size='sm'
                                                    id='resolved_image'
                                                    type='file'
                                                    name='resolved_image'
                                                    onChange={setImage}
                                                />
                                            }
                                            <MDBBtnGroup className='align-items-center' shadow='5' aria-label='Basic example'>
                                                <MDBBtn
                                                    size='lg'
                                                    onClick={flag1 ? updateStatus : closeComplaint}
                                                    color='info'
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
            }

        </div >
    )

}


