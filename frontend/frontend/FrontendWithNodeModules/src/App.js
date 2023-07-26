import logo from './logo.svg';
import './App.css';
import React from 'react'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// import HomepageHeader from './components/Header'
import Store from './Store/Store';
import Homepage from './Homepage';
import AdminDashboard from './Dashboard/AdminDashboard';
import HomepageHeader from './components/Header';
import AdminSidebar from './Dashboard/Sidebar';
import Main from './Dashboard/Main';
import Footer from './components/Footer';
import AdminLogin from './Login/AdminLogin'
import OfficialLogin from './Login/OfficialLogin'
import WorkerLogin from './Login/WorkerLogin'
import CitizenLogin from './Login/CitizenLogin'

import Registration from './Login/Registration';
import About from './components/headercomponents/About';
import Contact from './components/headercomponents/Contact';
import TestimonialSection from './components/headercomponents/TestimonialSection';
import Portfolio from './components/headercomponents/Portfolio';
import Pricing from './components/headercomponents/Pricing';
import Services from './components/headercomponents/Services';
import Team from './components/headercomponents/Team';
import ComplaintEnquiry from './Login/ComplaintEnquiry';
import ChartEcharts from './Dashboard/DashbordComponents/ChartEcharts';
import ComplaintTable from './Dashboard/DashbordComponents/ComplaintTable';
import OfficialManagement from './Dashboard/DashbordComponents/OfficialManagement';
import WorkerManagement from './Dashboard/DashbordComponents/WorkerManagement';
// import CitizenManagement from './Dashboard/DashbordComponents/CitizenManagement';
import AdminHeader from './Dashboard/Header'
import { Provider } from 'react-redux';
import Logout from './Store/Logout';
import AdminProfile from './Dashboard/DashbordComponents/AdminProfile';
import ComplaintCategory from './Dashboard/DashbordComponents/ComplaintCategory';
import AddOfficialWorker from './Dashboard/Usermanagement/AddOfficial&Vendor';
import RegisterComplaint from './components/Citizen/RegisterComplaint';
import WorkerComplaintList from './components/Worker/WorkerComplaintList';
import AdminForgotPassword from './Login/AdminForgotPassword';
import UserForgotPassword from './Login/UserForgotPassword';
import GMap from './components/Citizen/GMap';
import CitizenCompList from './components/Citizen/CitizenCompList';
import CitizenDashboard from './components/Citizen/CitizenDashboard';
import OfficialDashboard from './components/Official/OfficialDashboard';
import OfficialCompList from './components/Official/OfficialCompList';
import WorkerDashboard from './components/Worker/WorkerDashboard';


function App() {
  return (
    // <>
    <div className="">
      <HomepageHeader />
      <BrowserRouter>
        <Provider store={Store}>
          <Routes>

            <Route exact path='/' element={<><Homepage /></>} ></Route>
            <Route path='/\header\/' element={<><HomepageHeader /></>} ></Route>
            <Route path='/about' element={<About />} ></Route>
            <Route path='/services' element={<Services />} ></Route>
            <Route path='/testimonial' element={<TestimonialSection />} ></Route>
            <Route path='/portfolio' element={<Portfolio />} ></Route>
            <Route path='/team' element={<Team />} ></Route>
            <Route path='/pricing' element={<Pricing />} ></Route>
            <Route path='/contact' element={<Contact />} ></Route>

            <Route path='/adminlogin' element={<><AdminLogin /></>} ></Route>
            <Route path='/admindashboard' element={<><AdminDashboard /></>} ></Route>
            <Route path='/adminprofile' element={<><AdminHeader /><AdminSidebar /><AdminProfile /></>} ></Route>
            <Route path='/chartechart' element={<><AdminHeader /><AdminSidebar /><ChartEcharts /></>} ></Route>
            <Route path='/complainttable' element={<><AdminHeader /><AdminSidebar /><ComplaintTable /></>} ></Route>
            <Route path='/officialmanagement' element={<><AdminHeader /><AdminSidebar /><OfficialManagement /></>} ></Route>
            <Route path='/workermanagement' element={<><AdminHeader /><AdminSidebar /><WorkerManagement /></>} ></Route>
            <Route path='/complaintcategory' element={<><AdminHeader /><AdminSidebar /><ComplaintCategory /></>} ></Route>
            <Route path='/addofficialworker' element={<><AdminHeader /><AdminSidebar /><AddOfficialWorker /></>} ></Route>

            {/* <Route path='/citizenmanagement' element={<><AdminHeader /><AdminSidebar /><CitizenManagement /></>} ></Route> */}


            <Route path='/officiallogin' element={<><OfficialLogin /></>} ></Route>
            <Route path='/officialdashboard' element={<><OfficialDashboard /></>} ></Route>
            <Route path='/officialcomplist' element={<><OfficialCompList /></>} ></Route>

            <Route path='/workerlogin' element={<><WorkerLogin /></>} ></Route>
            <Route path='/workerdashboard' element={<><WorkerDashboard /></>} ></Route>
            <Route path='/workercomplist' element={<><WorkerComplaintList /></>} ></Route>

            <Route path='/citizenlogin' element={<><CitizenLogin /></>} ></Route>
            <Route path='/citizendashboard' element={<><CitizenDashboard /></>} ></Route>
            <Route path='/citizencomplist' element={<><CitizenCompList /></>} ></Route>
            <Route path='/registercomplaint' element={<><RegisterComplaint /></>} ></Route>
            <Route path='/citizenregistration' element={<><br /><br /><Registration /></>} ></Route>
            <Route path='/complaintenquiry' element={<><br /><br /><ComplaintEnquiry /></>} ></Route>

            <Route path='/logout' element={<><br /><br /><Logout /></>} ></Route>
            <Route path='/forgetpassadmin' element={<><br /><br /><AdminForgotPassword /></>} ></Route>
            <Route path='/forgotpassuser' element={<><br /><br /><UserForgotPassword /></>} ></Route>

          </Routes>
        </Provider>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
    // </>
  );
}

export default App;
