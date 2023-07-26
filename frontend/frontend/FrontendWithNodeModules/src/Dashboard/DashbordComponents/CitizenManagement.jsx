// import axios from 'axios';
// import { MDBBtn } from 'mdb-react-ui-kit';
// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// // import { Link, useNavigate } from "react-router-dom";

// export default function UserManagement() {

//     let navigation = useNavigate();
//     const [user, setUser] = useState([])
//     const [user_id, setUser_id] = useState([])

//     useEffect(() => {


//     }, [])


//     function deleteUser(user_id) {
//         console.log(user_id)
//         axios.delete("http://localhost:8080/admins/deleteid/" + user_id).then((response) => {

//             console.log(response.data);
//             alert("citizen delete successfully")
//             navigation('/dashboard')
//         }).catch(error => {
//             console.log(error);
//             alert(error)
//         })
//         navigation('/forms/form-control')
//     }

//     let [flag, setFlag] = useState();
//     let [username, setUsername] = useState();
//     let [password, setPassword] = useState();

//     let navigate = useNavigate();

//     // ------------------------------------------------------------- Session Management
//     const logout = () => {

//         window.sessionStorage.removeItem('username');
//         window.sessionStorage.removeItem('role');
//         // window.sessionStorage.clear();
//         // window.location.reload(false);
//         navigate("/");

//     };

//     useEffect(() => {

//         const sessData = window.sessionStorage.getItem('username');
//         const role = window.sessionStorage.getItem('role');
//         console.log("Session console - ", sessData);
//         console.log("Session Parsed - ", JSON.parse(sessData));

//         if (sessData != '' && sessData != 'undefined' && sessData != null && role == 'ADMIN') {
//             setFlag(true);

//             axios.get('http://localhost:8080/admins/get').then((response) => {

//                 setUser(response.data);
//                 console.log(response.data);

//             }).catch(error => {
//                 console.log(error);

//             })


//         }
//         else {
//             navigate('/adminlogin')
//         }
//     });

//     // -------------------------------------------------------------------------

//     return (
//         <div>
//             {flag &&
//                 <div>
//                     <main id="main" className="main">

//                         <div className="pagetitle">
//                             <h1>Citizen Management</h1>
//                             <nav>
//                                 <ol className="breadcrumb">
//                                     <li className="breadcrumb-item"><a href="/">Home</a></li>
//                                     <li className="breadcrumb-item">User Management</li>
//                                     <li className="breadcrumb-item active">Citizen Management</li>
//                                 </ol>
//                             </nav>
//                         </div>{/* End Page Title */}

//                         <section className="section">
//                             <div className="row">
//                                 <div className="col-lg-12">

//                                     <div className="card">
//                                         <div className="card-body">
//                                             <h5 className="card-title"></h5>

//                                             {/* Table with hoverable rows */}
//                                             <table className="table table-hover">
//                                                 <thead>
//                                                     <tr>
//                                                         <th scope="col">ID</th>
//                                                         <th scope="col">Profile</th>
//                                                         <th scope="col">Name</th>
//                                                         <th scope="col">Aadhar Card</th>
//                                                         <th scope="col">Contact</th>
//                                                         <th scope="col">Action</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     {user.map(
//                                                         citizen =>
//                                                             <tr key={citizen.user_id}>
//                                                                 <th scope="row">{citizen.user_id}</th>
//                                                                 <td>{citizen.user_photo}</td>
//                                                                 <td>{citizen.user_first_name}</td>
//                                                                 <td>{citizen.user_aadhar_number}</td>
//                                                                 <td>{citizen.user_contact_number}</td>
//                                                                 <td>
//                                                                     <center>
//                                                                         {/* <td className="text-center"><button className="btn btn-success"><Link to="/forms/form-control/adduser">Update</Link></button></td>
//                                                                 <td className="text-center"><button className="btn btn-danger" value={citizen.user_id} onClick={() => deleteUser(citizen.user_id)} >Delete</button></td> */}
//                                                                     </center>
//                                                                 </td>
//                                                             </tr>
//                                                     )}
//                                                 </tbody>
//                                             </table>
//                                             {/* End Table with hoverable rows */}

//                                         </div>
//                                     </div>





//                                 </div>
//                             </div>
//                         </section>

//                     </main>{/* End #main */}

//                     {/* ======= Footer ======= */}
//                     <footer id="footer" className="footer">
//                         <div className="copyright">
//                             &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
//                         </div>
//                         <div className="credits">
//                             {/* All the links in the footer should remain intact. */}
//                             {/* You can delete the links only if you purchased the pro version. */}
//                             {/* Licensing information: https://bootstrapmade.com/license/ */}
//                             {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
//                             Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
//                         </div>
//                     </footer>{/* End Footer */}

//                     <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

//                 </div>
//             }
//         </div>
//     )
// }
