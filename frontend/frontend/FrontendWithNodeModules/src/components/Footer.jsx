import React from 'react'

export default function Footer() {
    return (
        <div id='footer'  >
            {/* ======= Footer ======= */}
            {/* <footer id="footer"> */}

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact" >
                                <h3>OnePage</h3>
                                <p>
                                    PMC Main Building, <br />
                                    Near. Mangla Theatre, <br />
                                    Shivajinagar, <br />
                                    Pune- 411 005 <br /><br />
                                    <strong>Phone:</strong> 020-25501000<br />
                                    <strong>Email:</strong> info@punecorporation.org<br />
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/about">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/services">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/termsofservice">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/privacypolicy">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>IET-Group11</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            {/* All the links in the footer should remain intact. */}
                            {/* You can delete the links only if you purchased the pro version. */}
                            {/* Licensing information: https://bootstrapmade.com/license/ */}
                            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/ */}
                            Designed by <a href="https://www.cdac.in/">@2022 C-DAC - IET-Group11</a>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            {/* </footer>End Footer */}

           
        </div>
    )
}
