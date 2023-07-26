
import { useNavigate } from 'react-router-dom';
import Homepage from '../Homepage';


export default function Logout() {
  
  const navigate = useNavigate();
    

    window.sessionStorage.setItem('username', JSON.stringify());
    window.sessionStorage.setItem('role', JSON.stringify());
        // window.location.reload(false);
        
        // function home() { navigate("/"); };
        

}

















// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";


// export default function Logout() {
//     let dispatch = useDispatch();
//     let navigate = useNavigate();

//     useEffect(() => {

//         dispatch({
//             type: "save", load: {
//                 admin_id: '',
//                 admin_username: '',
//                 admin_password: '',
//                 admin_profile_image: '',
                
//                 user_id: '',
//                 user_aadhar_number: '',
//                 user_contact_number: '',
//                 user_email: '',
//                 user_first_name: '',
//                 user_last_name: '',
//                 user_middle_name: '',
//                 user_password: '',
//                 user_pincode: '',
//                 user_role: '',
//                 user_username: '',
//                 user_profile_image: ''
//             }
//         })

//         navigate("/")
//     }, []);

// }

