import React from 'react'
import { createStore } from 'redux';


const counterReducer = (state = {
    admin_id: '',
    admin_username:'',
    admin_password:'',
    admin_profile_image:'',
    
    user_id: '',
    user_aadhar_number: '',
    user_contact_number: '',
    user_email: '',
    user_first_name: '',
    user_last_name: '',
    user_middle_name: '',
    user_password: '',
    user_pincode: '',
    user_role: '',
    user_username: '',
    user_profile_image: ''

}, action) => {

    if (action.type === "save") {
        return {
            admin_id: action.load.admin_id,
            admin_username: action.load.admin_username,
            admin_password: action.load.admin_password,
            admin_profile_image: action.load.admin_profile_image,

            user_id: action.load.user_id,
            user_aadhar_number: action.load.user_aadhar_number,
            user_contact_number: action.load.user_contact_number,
            user_email: action.load.user_email,
            user_first_name: action.load.user_first_name,
            user_last_name: action.load.user_last_name,
            user_middle_name: action.load.user_middle_name,
            user_password: action.load.user_password,
            user_pincode: action.load.user_pincode,
            user_username: action.load.user_username,
            user_role: action.load.user_role,
            user_profile_image: action.load.user_profile_image

        };
    }

    return state;

}

const Store = createStore(counterReducer);

export default Store;
