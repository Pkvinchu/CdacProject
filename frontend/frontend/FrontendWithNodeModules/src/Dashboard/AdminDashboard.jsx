import React, { useEffect } from 'react'
import Main from './Main'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {



    return (
        <div>
            <Header />
            <Sidebar />
            <Main />
            <Footer />
        </div>
    )

}
