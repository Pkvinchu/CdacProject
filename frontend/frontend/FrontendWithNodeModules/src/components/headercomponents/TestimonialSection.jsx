import React from 'react'

export default function TestimonialSection() {



    return (
        <div>

            {/* ======= Testimonials Section ======= */}
            <section id="testimonials" className="testimonials">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Inspiration</h2>
                    </div>

                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">

                            <div className="swiper-slide ">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Failure will never overtake me if my determination to succeed is strong enough.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="https://allpngfree.com/thumbnail/dr-apj-abdul-kalam-png-hd-images--thumbnail-1658862751.jpg" className="testimonial-img" alt="" />
                                    <h3>Dr. A P J Abdul Kalam</h3>
                                    <h4>Former President of India</h4>
                                </div>
                            </div>{/* End testimonial item */}

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                </div>
                            </div>{/* End testimonial item */}

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                </div>
                            </div>{/* End testimonial item */}

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                </div>
                            </div>{/* End testimonial item */}

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                </div>
                            </div>{/* End testimonial item */}

                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                </div>
            </section>{/* End Testimonials Section */}
        </div>
    )
}
