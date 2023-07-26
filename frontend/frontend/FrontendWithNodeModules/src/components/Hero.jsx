import React from 'react'
import '../CustomCSS.css'

export default function Hero() {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 text-center">
              <h1>Social Complaints Portal</h1>
              <h2>Municipal Corporation</h2>
            </div>
          </div>
          <div className="text-center">
            {(sessionStorage.getItem('role') == 'ADMIN') && <a className="btn-get-started scrollto" href="/admindashboard">Admin Dhasboard</a>}
            {(sessionStorage.getItem('role') == 'OFFICIAL') && <a className="btn-get-started scrollto" href="/officialdashboard">Official Dashboard</a>}
            {(sessionStorage.getItem('role') == 'WORKER') && <a className="btn-get-started scrollto" href="/workerdashboard">Worker Dashboard</a>}
            {(sessionStorage.getItem('role') == 'CITIZEN') && <a className="btn-get-started scrollto" href="/citizendashboard">Citizen Dashboard</a>}
            {(sessionStorage.getItem('role') == '') && <a className="btn-get-started scrollto" href="/citizendashboard">Get Started</a>}
          </div>

          <div className="row icon-boxes " >
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
              <div className=" hero-zoom hero-bg-image1">
                
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
              <div className="hero-zoom hero-bg-image2">
                <div className="icon"><i className=""></i></div>

              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
              <div className="hero-zoom hero-bg-image3">

                <p className="description"></p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
              
                <div className="hero-zoom hero-bg-image4" >
              
              </div>
            </div>

          </div>
        </div>
      </section> {/* End Hero */}
    </div>
  )
}
