import axios from 'axios'
import React, { useState } from 'react'

export default function AssignWorker() {

    let [values, setValues] = useState({
        user_worker_id: '',
        complaint_id: ''
    });


    const setStates = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }


    const assignWorker = (e) => {

        e.preventDefault();

        axios.put(`http://localhost:8080/complaintinfo/assignworker/${values.user_worker_id}/${values.complaint_id}`, {})
            .then((response) => {
                console.log(response.data);
            }).then((err) => {
                console.log(err);
                alert("Worker assigning failed..")
            });
    }

   

    // ------------------------------------------------------ Setting Status AS Completed and Closing the Issue ---------------------------------------


    // let [values, setValues] = useState({
    //     complaint_id: ''
    // });


    // const setStates = (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value });
    // }

    let [oneFile, setOneFile] = useState({ image: undefined });

    const setImage = (e) => {
        e.preventDefault();
        let field = e.target.files[0];

        setOneFile({ image: e.target.files[0] });
        console.log(oneFile.image);

    }

    const closeComplaint = (e) => {

        e.preventDefault();

        // Create an object of formData
        const myFile = new FormData();

        // Update the formData object
        myFile.append(
            "myFile",
            oneFile.image
        );

        axios.put(`http://localhost:8080/complaintinfo/closecomplaint/${values.complaint_id}`, myFile, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then((response) => {
                console.log(response.data);
            }).then((err) => {
                console.log(err);
                alert("Complaint updation failed..")
            });
    }



    return (
        <div>

        </div>
    )
}
