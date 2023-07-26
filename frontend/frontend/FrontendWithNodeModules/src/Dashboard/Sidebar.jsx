import React from 'react'

export default function Sidebar() {
    return (
        <div style={{ marginTop: '120' }}>
            {/* ======= Sidebar ======= */}
            <aside id="sidebar" className="sidebar" >

                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link " href="#">
                            <i className=""></i>
                            <span style={{ marginTop: '120' }}></span>
                        </a>
                    </li>{/* End Dashboard Nav */}

                    <li className="nav-item">
                        <a className="nav-link " href="/admindashboard">
                            <i className="bi bi-grid"></i>
                            <span style={{ marginTop: '120' }}>Dashboard</span>
                        </a>
                    </li>{/* End Dashboard Nav */}

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>User Management</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="/officialmanagement">
                                    <i className="bi bi-circle"></i><span>Official Management</span>
                                </a>
                            </li>
                            <li>
                                <a href="/workermanagement">
                                    <i className="bi bi-circle"></i><span>Worker Management</span>
                                </a>
                            </li>

                        </ul>
                    </li>{/* End Components Nav */}

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-layout-text-window-reverse"></i><span>Complaints</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="/complainttable">
                                    <i className="bi bi-circle"></i><span>Complaint List</span>
                                </a>
                            </li>
                            <li>
                                <a href="/complaintcategory">
                                    <i className="bi bi-circle"></i><span>Add Complaint Category</span>
                                </a>
                            </li>
                        </ul>
                    </li>{/* End Tables Nav */}

                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-journal-text"></i><span>Add Official/Worker</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="/addofficialworker">
                                    <i class="bi bi-circle"></i><span>Official/Worker Registration</span>
                                </a>
                            </li>
                        </ul>
                    </li>{/*<!-- End Forms Nav -->*/}

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="/chartechart">
                                    <i className="bi bi-circle"></i><span>ECharts</span>
                                </a>
                            </li>
                        </ul>
                    </li>{/* End Charts Nav */}

                    <li className="nav-heading">Pages</li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="adminprofile">
                            <i className="bi bi-person"></i>
                            <span>Profile</span>
                        </a>
                    </li>{/* End Profile Page Nav */}

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/logout">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span>Logout</span>
                        </a>
                    </li>{/* End Login Page Nav */}



                </ul>

            </aside>{/* End Sidebar*/}
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    )
}
