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
import { useDispatch, useSelector } from 'react-redux';



export default function OfficialCompList() {


    let [username, setUsername] = useState();
    let [complaintsInfo, setComplaintsInfo] = useState([]);
    let [workerInfo, setWorkerInfo] = useState([]);

    let [complaintId, setComplaintId] = useState();
    let [worker, setWorker] = useState();
    let [flag, setFlag] = useState(false);
    let [flag1, setFlag1] = useState(false);
    let [flag2, setFlag2] = useState(false);
    let [image, setImage] = useState();
    let [status, setStatus] = useState("");
    let navigate = useNavigate();

    let [values, setValues] = useState([{
        compId: undefined,
        compCat: '',
        compImage: undefined,
        compPriority: '',
        compStatus: ''
    }]);


    // ------------------------------------------------------------- Session Management


    // -------------------------------------------------------------------------

    useEffect(() => {

        const uname = window.sessionStorage.getItem('username');
        const role = window.sessionStorage.getItem('role');
        console.log("Session console - ", uname);
        console.log("Session Parsed - ", JSON.parse(uname));

        if (uname != '' && uname != 'undefined' && uname != null && role == 'OFFICIAL') {
            setFlag1(true);

            axios.get("http://localhost:8080/image/getall", {})
                .then((res) => {
                    let getData = res.data;
                    console.log(getData);

                    console.log("1");

                    var newArray = getData.filter((el) => {
                        return el.complaintInformationEntity.complaint_department == JSON.parse(sessionStorage.getItem('department')) &&
                            el.complaintInformationEntity.complaint_status != 'COMPLETED & CLOSED';
                    })

                    console.log("2");
                    console.log(newArray);
                    setComplaintsInfo(newArray);
                    console.log("3");

                }).catch((err) => {
                    console.log(err);
                    alert("Fetching image info failed..")
                    console.log("5");
                });

            // ----------------------------------------------- Get Worker & Filter by Department >>>>>>>>>>>>>>>>>>>>>>>>>>

            var dept = JSON.parse(sessionStorage.getItem('department'))

            console.log(dept);

            axios.get(`http://localhost:8080/user/get`, {})
                .then((response) => {

                    let getData = response.data;
                    console.log(response.data);

                    var newArray = getData.filter((el) => {
                        if (el != null)
                            return el.userdepartment == JSON.parse(sessionStorage.getItem('department')) &&
                                el.user_role == 'WORKER';
                    })

                    setWorkerInfo(newArray);


                })
                .catch((reject) => {
                    console.log(reject);
                    alert("Worker data fetching failed..")
                })


        }
        else
            navigate('/officiallogin');
    }, []);



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


    const nav = (e) => {

        var val = e.target.value;
        setComplaintId(e.target.name);

        setFlag1(false);
        setFlag2(true);

    }

    const selectWorker = (e) => {

        console.log(e.target.value);
        if (e.target.value !== 'undefined')
            setWorker(e.target.value);
        else
            alert("Worker must be assigned..");

    }

    // ------------------------------------------------------ Assign Worker To Complaint ---------------------------------------

    const updateStatus = (e) => {

        e.preventDefault();

        /*
        worker id
        complaint id
        */

        if (worker !== 'undefined')

            axios.put(`http://localhost:8080/complaintinfo/assignworker/${worker}/${complaintId}`, {})
                .then((response) => {

                    console.log(response.data);
                    alert("Setting status of complaint successfull..")
                    window.location.reload(true);

                }).catch((err) => {

                    console.log(err);
                    alert("Setting status of complaint failed..")
                });

        else {
            alert("Worker must be assigned..");
        }
    }


    // -------------------------------------------------------- return ------------------------------------------------

    return (

        <div style={{ margin: '20px', marginTop: '120px' }}>
            {flag1 &&
                <div>
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
                                    <th> Complaint Details</th>
                                    <th> Complaint Image</th>
                                    <th> Resolved Image</th>
                                    <th> Status</th>
                                    <th> Assigned Worker</th>
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
                                                <pre>Landmark    :{complaint.complaintInformationEntity.complaint_landmark}</pre>
                                            </td>

                                            <td>
                                                <pre>Received Date :{complaint.complaintInformationEntity.complaint_received_date}</pre>
                                                <img src={imageConvertor(complaint.image)} width="100" height="120"></img>
                                            </td>

                                            <td>
                                                <pre>Resolved Date :{complaint.complaintInformationEntity.complaint_resolved_date}</pre>
                                                {/* <img src={imageConvertor(complaint.image)} width="100" height="120"></img> */}
                                            </td>

                                            <td> {complaint.complaintInformationEntity.complaint_status}</td>

                                            <td>
                                                {(complaint.complaintInformationEntity.userProfileEntityWor != null) &&
                                                    <div>
                                                        {complaint.complaintInformationEntity.userProfileEntityWor.user_first_name}
                                                        &nbsp;
                                                        {complaint.complaintInformationEntity.userProfileEntityWor.user_last_name}
                                                    </div>
                                                }
                                            </td>

                                            <td style={{ fontSize: '10px', justifyContent: 'center' }}>
                                                <center>
                                                    <button type="button" style={{ fontSize: '10px' }} onClick={nav} name={complaint.complaintInformationEntity.complaint_id} value='assign' className="btn btn-info">Assign Worker</button>
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

            {flag2 &&
                <MDBContainer fluid className='h-custom'>
                    <MDBRow className='d-flex justify-content-center align-items-center '>
                        <MDBCol col='12' className='m-5'>
                            <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>
                                <MDBCardBody className='p-0'>
                                    <MDBRow>
                                        <MDBCol md='6' className='p-5 bg-white'>


                                            <MDBRow>
                                                <select
                                                    wrapperclass='mb-4'
                                                    className="form-control"
                                                    name="status"
                                                    onChange={selectWorker}
                                                    required
                                                >
                                                    <option key={1} value="selectworker" disabled selected={true}>- Workers -</option>
                                                    {workerInfo.map((item) => (
                                                        <option key={item.user_id} value={item.user_id} >
                                                            {item.user_first_name} &nbsp; {item.user_last_name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </MDBRow>

                                            <br />


                                            <MDBBtnGroup className='align-items-center' shadow='5' aria-label='Basic example'>
                                                <MDBBtn
                                                    size='lg'
                                                    onClick={updateStatus}
                                                    color='info'
                                                    outline>
                                                    Assign Worker
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


