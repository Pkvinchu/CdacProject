import React from 'react'

export default function Contact() {
    return (
        <div>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title" style={{ marginTop: '50px' }}>
                        <h2>Contact</h2>
                        <p></p>
                    </div>

                    <div>
                        <iframe style={{ border: 0, width: '100%', height: '270px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p> PMC Main Building, <br />
                                        Near. Mangla Theatre, <br />
                                        Shivajinagar, <br />
                                        Pune- 411 005</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@punecorporation.org</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>020 - 25501000</p>
                            </div>
                        </div>

                    </div>
                </div >
            </section > {/* End Contact Section */}
        </div >
    )
}
