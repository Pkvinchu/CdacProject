
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Login/Color.css'

export default function Header() {


  const [username, setUsername] = useState();

  // useEffect(() => {
  //   const data = window.sessionStorage.getItem('username');
  //   if ( data !== null ) setUsername(JSON.parse(data));
  // }, [username]);


  const logout = (e) => {

    e.preventDefault()
    window.sessionStorage.clear();
    // window.location.reload(false);
    window.location.href = "/";
  }

  return (

    <div>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
        {(sessionStorage.getItem('role') === 'ADMIN' ||
                  sessionStorage.getItem('role') === 'OFFICIAL' ||
                  sessionStorage.getItem('role') === 'WORKER' ||
                  sessionStorage.getItem('role') === 'CITIZEN')
                  ? <h1 className="logo"><a href="/">Social Complaints Portal</a></h1> : <h1 className="logo"><a href="/">Municipal Corporation</a></h1>
  }
          
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>*/}

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="/">Home</a></li>
              <li><a className="nav-link scrollto" href="/about">About</a></li>
              <li><a className="nav-link scrollto" href="/services">Services</a></li>
              <li><a className="nav-link scrollto o" href="/portfolio">Portfolio</a></li>
              {/* <li><a className="nav-link scrollto" href="/team">Team</a></li> */}
              <li className="dropdown"><a href="#"><span>Login</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="/adminlogin">Admin Login</a></li>
                  <li><a href="/officiallogin">Official Login</a></li>
                  <li><a href="/workerlogin">Worker Login</a></li>
                  <li><a href="/citizenlogin">Citizen Login </a></li>
                  <li><a href="/citizenregistration">Citizen Registration</a></li>
                  <li><a href="/complaintenquiry">Complaint Status</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
              <li style={{ padding: '20px' }}>
                {(sessionStorage.getItem('role') === 'ADMIN' ||
                  sessionStorage.getItem('role') === 'OFFICIAL' ||
                  sessionStorage.getItem('role') === 'WORKER' ||
                  sessionStorage.getItem('role') === 'CITIZEN')
                  && (<button id='logout-btn' onClick={logout}>Logout</button>)
                }
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>{/* .navbar */}

        </div>
      </header>{/* End Header */}


    </div>
  )
}
