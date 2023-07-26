import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ComplaintTable() {

    const [information, setInfomramtion] = useState([]);
    let [username, setUsername] = useState();
    let [flag, setFlag] = useState();
    let [password, setPassword] = useState();

    let navigate = useNavigate();

    useEffect(() => {

        const sessData = window.sessionStorage.getItem('username');
        const role = window.sessionStorage.getItem('role');
        console.log("Session console - ", sessData);
        console.log("Session Parsed - ", JSON.parse(sessData));

        if (sessData != '' && sessData != 'undefined' && sessData != null && role == 'ADMIN') {
            setFlag(true);

            // --------------------------------------- Get All Complaints >>>>>>>>>>>>>>>>>>>>>>>>>

            axios.get('http://localhost:8080/complaintinfo/getall')
                .then((response) => {

                    setInfomramtion(response.data);
                    console.log(response.data);

                }).catch(error => {

                    console.log(error);

                })

        }
        else {
            navigate('/adminlogin')
        }
    }, [])




    // -------------------------------------------------------------------------

    return (
        <div>
            {flag &&
                <div>

                    <main id="main" className="main">

                        <div className="pagetitle">
                            <h1>Complaint List</h1>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item">Complaints</li>
                                    <li className="breadcrumb-item active">Complaint List</li>
                                </ol>
                            </nav>
                        </div>{/* End Page Title */}

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
                                                        <th scope="col">Complaint Category</th>
                                                        <th scope="col">Complaint Description</th>
                                                        <th scope="col">Complaint Status</th>
                                                        <th scope="col">Complaint Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {information.map(
                                                        complaintInformation =>
                                                            <tr key={complaintInformation.user_id}>
                                                                <th scope="row">{complaintInformation.complaint_id}</th>
                                                                <td>{complaintInformation.complaint_category}</td>
                                                                <td>{complaintInformation.complaint_description}</td>
                                                                <td>{complaintInformation.complaint_status}</td>
                                                                <td>
                                                                    <pre>Received :{complaintInformation.complaint_received_date}</pre>
                                                                    <pre>Resolved :{complaintInformation.complaint_resolved_date}</pre>
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
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </footer>{/* End Footer */}

                    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

                </div>
            }
        </div>
    )
}
