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




export default function CitizenCompList() {


    let [username, setUsername] = useState();
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

    // ------------------------------------------------------------- Session Management
    const logout = () => {

        window.sessionStorage.removeItem('username');
        window.sessionStorage.removeItem('role');
        // window.sessionStorage.clear();
        // window.location.reload(false);
        navigate("/");

    };

    // -------------------------------------------------------------------------

    useEffect(() => {

        const uname = window.sessionStorage.getItem('username');
        const role = window.sessionStorage.getItem('role');
        console.log("Session console - ", uname);
        console.log("Session Parsed - ", JSON.parse(uname));

        if (uname != '' && uname != 'undefined' && uname != null && role == 'CITIZEN') {
            setFlag(true);

            axios.get("http://localhost:8080/image/getall", {})
                .then((res) => {
                    let getData = res.data;
                    console.log(getData);

                    console.log("1");

                    var newArray = getData.filter((el) => {
                        if (el.complaintInformationEntity.userProfileEntity != null)
                            return el.complaintInformationEntity.userProfileEntity.user_id == JSON.parse(sessionStorage.getItem('id'))
                        // && el.complaintInformationEntity.complaint_status != 'COMPLETED & CLOSED';
                    })

                    console.log("2");
                    console.log(newArray);
                    setComplaintsInfo(newArray);
                    console.log("3");

                }).catch((err) => {
                    console.log(err);
                    alert("Fetching Complaint info failed..")
                    console.log("5");
                });
        }
        else
            navigate('/citizenlogin');
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
        if (val === 'update') {
            setFlag1(true);
            setFlag2(false);
        }
        else if (val === 'complete') {
            setFlag2(true);
            setFlag1(false);
        }
    }

    const selectStatus = (e) => {
        console.log(e.target.value);
        if (e.target.value !== 'undefined')
            setComplaintstatus(e.target.value);
        else
            alert("Status must not be empty");

    }

    // -------------------------------------------------------- return ------------------------------------------------

    return (

        <div style={{ margin: '25px', marginTop: '100px' }}>
            {flag &&
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
                                    <th>Complaint Image</th>
                                    <th> Status</th>
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
                                                <pre>
                                                    {complaint.image_type == 'COMPLAINT' ? 'Received Date' : 'Resolved Date'} :{complaint.complaintInformationEntity.complaint_received_date}
                                                </pre>
                                                <img src={imageConvertor(complaint.image)} width="120" height="120"></img>
                                            </td>

                                            {/*<td>
                                                <pre>Resolved Date :{complaint.complaintInformationEntity.complaint_resolved_date}</pre>
                                                 <img src={imageConvertor(complaint.image)} width="100" height="120"></img> 
                                            </td>*/}

                                            <td> {complaint.complaintInformationEntity.complaint_status}</td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
            }
        </div>
    )

}


