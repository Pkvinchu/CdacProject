import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Chart from "react-google-charts";
import axios from 'axios';


const data = [
    ["Task", "Hours per Day"],
    ["In Progress", JSON.parse(sessionStorage.getItem('inprogress'))],
    ["Pending", JSON.parse(sessionStorage.getItem('pending'))],
    ["Completed", JSON.parse(sessionStorage.getItem('completed'))],
    // ["Sleep", 7] // CSS-style declaration
];

const options = {
    title: "Pie - Complaint Statistics",
    pieHole: 0.4,
    is3D: true
};



export default function WorkerDashboard() {

    let [total, setTotal] = useState(0);
    let [inProgress, setInProgress] = useState(0);
    let [pending, setPending] = useState(0);
    let [completed, setCompleted] = useState(0);
    const [information, setInfomramtion] = useState([]);

    let [username, setUsername] = useState();
    let [password, setPassword] = useState();

    let navigate = useNavigate();


    // ------------------------------------------------------------- Session Management
 
    useEffect(() => {

        const sessData = window.sessionStorage.getItem('username');
        const role = window.sessionStorage.getItem('role');
        console.log("Session console - ", sessData);
        console.log("Session Parsed - ", JSON.parse(sessData));

        if (sessData != '' && sessData != 'undefined' && sessData != null && role == 'WORKER') {


            // --------------------------------------- Get All Complaints >>>>>>>>>>>>>>>>>>>>>>>>>

            axios.get('http://localhost:8080/complaintinfo/getcount')
                .then((response) => {

                    let getData = response.data;

                    console.log(response.data);
                    console.log(response.data[0]);
                    console.log(getData[0]);
                    console.log(getData[1]);
                    console.log(getData[2]);
                    console.log(getData[3]);

                    sessionStorage.setItem('total', JSON.stringify(getData[0]));
                    sessionStorage.setItem('inprogress', JSON.stringify(getData[1]));
                    sessionStorage.setItem('pending', JSON.stringify(getData[2]));
                    sessionStorage.setItem('completed', JSON.stringify(getData[3]));

                    var a = getData.length;
                    setTotal(a);

                    console.log('total length', getData.length);


                    setInfomramtion(response.data);

                    console.log(`${information[0]}`);

                }).catch((error) => {

                    console.log(error);

                })

        }
        else {
            navigate('/workerlogin');
        }

    }, []);

    // -------------------------------------------------------------------------

    return (
        <div>
            <main id="main" className="main">

                <div className="pagetitle" style={{ marginTop: '50px' }}>
                    <aside id="sidebar" className="sidebar" >
                        <br /><br />
                        <ul className="sidebar-nav" id="sidebar-nav">
                            <li className="nav-item">
                                <a className="nav-link " href="#">
                                    <i className=""></i>
                                    <span style={{ marginTop: '120' }}></span>
                                </a>
                            </li>{/* End Dashboard Nav */}

                            <li className="nav-item">
                                <a className="nav-link " href="/workercomplist">
                                    <i className="bi bi-grid"></i>
                                    <span style={{ marginTop: '120' }}>Complaint List</span>
                                </a>
                            </li>{/* End Dashboard Nav */}
                            {/* <li className="nav-item">
                                <a className="nav-link " href="">
                                    <i className="bi bi-grid"></i>
                                    <span style={{ marginTop: '120' }}></span>
                                </a>
                            </li>End Dashboard Nav */}
                        </ul>
                    </aside>
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}

                <section className="section dashboard" style={{ backgroundColor: '', justifyContent: 'space-between' }}>
                    <div className="">

                        {/* Left side columns */}
                        <div className="col-lg-8" style={{ backgroundColor: '', justifyContent: 'space-evenly' }}>
                            <div className="row" style={{ backgroundColor: '', justifyContent: 'space-evenly' }}>
                                <div className="row" style={{ backgroundColor: '', justifyContent: 'space-evenly' }}>

                                    {/* Sales Card */}
                                    <div className="col-xxl-4 col-md-4">
                                        <div className="card info-card sales-card">

                                            <div className="card-body">
                                                <h5 className="card-title">Received Complaints<span></span></h5>

                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <b className="minecart-loaded">📨</b>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h6>{JSON.parse(sessionStorage.getItem('total'))}</h6>
                                                        <span className="text-success small pt-1 fw-bold"></span> <span className="text-muted small pt-2 ps-1"></span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* End Sales Card */}

                                    {/* Revenue Card */}
                                    <div className="col-xxl-4 col-md-4">
                                        <div className="card info-card revenue-card">

                                            <div className="filter">
                                                <a className="icon" href="#" data-bs-toggle="dropdown"></a>

                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Pending <span></span></h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <b className="">⏳</b>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h6>{JSON.parse(sessionStorage.getItem('pending'))}</h6>
                                                        <span className="text-success small pt-1 fw-bold"></span> <span className="text-muted small pt-2 ps-1"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* End Revenue Card */}




                                    {/* Customers Card */}
                                    <div className="col-xxl-4 col-md-4">
                                        <div className="card info-card customers-card">
                                            <div className="filter">
                                                <a className="icon" href="#" data-bs-toggle="dropdown"></a>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Completed <span></span></h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="ri-checkbox-circle-line"></i>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h6>{JSON.parse(sessionStorage.getItem('completed'))}</h6>
                                                        <span className="text-danger small pt-1 fw-bold"></span> <span className="text-muted small pt-2 ps-1"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* End Customers Card */}


                                </div>
                            </div>
                        </div>{/* End Left side columns */}
                        <div style={{ height: '400px', width: '400px', display: 'flex', justifyContent: '', backgroundColor: '' }}>
                            <div className="App" style={{ height: '200px', width: '250px' }}>
                                <Chart
                                    chartType="PieChart"
                                    width="400%"
                                    height="400px"
                                    data={data}
                                    options={options}
                                />
                            </div>

                        </div>
                        {/* Right side columns */}
                        <div className="col-lg-4">
                        </div>{/* End Right side columns */}

                    </div>
                </section>

            </main>{/* End #main */}

        </div>
    )
}
