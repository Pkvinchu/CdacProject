import axios from 'axios'
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ComplaintCategory() {

    let navigate = useNavigate()

    let [flag, setFlag] = useState(false);
    let [complaintdescription, setComplaintDescription] = useState("")
    let [department, setDepartment] = useState([])
    let [selectDept, setSelectDept] = useState()


    let [username, setUsername] = useState();
    let [password, setPassword] = useState();

    // ------------------------------------------------------------- Session Management
    const logout = () => {

        window.sessionStorage.removeItem('username');
        window.sessionStorage.removeItem('role');
        // window.sessionStorage.clear();
        // window.location.reload(false);
        navigate("/");

    };



    // -------------------------------------------------------------------------

    let check = () => {

        console.log("enter check function");

        console.log(department[0].government_department_id);

        axios.post(`http://localhost:8080/complaintcategory/insert/${selectDept}`,
            {
                complaint_category_name: complaintdescription
            })
            .then(function (response) {
                alert("Complaint Category for "+selectDept+" added successfully..");
                console.log(response.data);
            })
            .catch(function (error) {
                alert("Complaint category addition failed..")
                console.log(error);
            });
    }



    useEffect(() => {

        const sessData = window.sessionStorage.getItem('username');
        const role = window.sessionStorage.getItem('role');
        console.log("Session console - ", sessData);
        console.log("Session Parsed - ", JSON.parse(sessData));

        if (sessData != '' && sessData != 'undefined' && sessData != null && role == 'ADMIN') {
            setFlag(true);

            axios.get('http://localhost:8080/govdept/getall').then((response) => {
                console.log(response.data);

                setDepartment(response.data);
                
            }).catch(error => {
                
                console.log("NOT OK")
                console.log(error);

            })

        }
        else {
            navigate('/adminlogin')
        }

    }, [])

    // *************************************** LOGIC 
let handleSelect = (e) => {
    console.log(e.target.value);
    setSelectDept(e.target.value);
}



    return (

        <div className="col-lg-8" style={{ marginLeft: '410px' }}>
            {flag &&
                <MDBContainer className='h-custom'>

                    <MDBRow className="justify-content-center">

                        <MDBCol col='3' className='m-5'>

                            <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>

                                <MDBCardBody className='p-4'>

                                    <center> <h3 className="justify-content-center" style={{ color: '#4835d4' }}> <b>Add New Complaint Category</b></h3></center>

                                    <select
                                        className="form-control"
                                        name="department"
                                        onChange={handleSelect}
                                        required

                                    >
                                        <option key={1} value="selectComplaint" disabled selected>Department</option>
                                        {department.map((item) => (
                                            <option key={item} value={item.government_department_id} >
                                                {item.government_department_name}
                                            </option>
                                        ))}
                                    </select>

                                    <hr />


                                    <MDBInput
                                        wrapperClass='mb-4'
                                        label='Complaint Category'
                                        name='complaintdescription'
                                        size='lg'
                                        id='form3'
                                        type='text'
                                        onBlur={(e) => { setComplaintDescription(e.target.value) }}
                                    />
                                    <div className="d-grid">
                                        <MDBBtn color="success" onClick={check}>Add</MDBBtn>
                                    </div>

                                </MDBCardBody>

                            </MDBCard>

                        </MDBCol>

                    </MDBRow>

                </MDBContainer>
            }
        </div>
    )
}
