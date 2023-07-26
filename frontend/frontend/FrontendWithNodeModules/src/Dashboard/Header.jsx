import React from 'react'

export default function Header() {
    
    return (
        <div style={{marginTop:'100px',  }}>
            {/* ======= Header ======= */}
            <header id="header" className="header d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <a href="/admindashboard" className="logo d-flex align-items-center">
                        <span className="d-none d-lg-block"></span>
                    </a>
                </div>{/* End Logo */}

                <div className="search-bar">
                    <div className="search-form d-flex logo align-items-center">
                    <img src="https://st.depositphotos.com/1002881/1285/i/950/depositphotos_12859789-stock-photo-admin-tag.jpg" alt="" />
                    </div>
                </div>{/* End Logo */}

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                <i className="bi bi-search"></i>
                            </a>
                        </li>{/* End Search Icon*/}

                        <li className="nav-item dropdown pe-3">

                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block  ps-2">Admin</span>
                            </a>{/* End Profile Iamge Icon */}

                            
                        </li>{/* End Profile Nav */}

                    </ul>
                </nav>{/* End Icons Navigation */}

            </header>{/* End Header */}
        </div>
    )
}
