import React from 'react'

export default function FAQ() {

    
    return (
        <div>

            {/* ======= Frequently Asked Questions Section ======= */}
            <section id="faq" className="faq section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                        <p></p>
                    </div>

                    <div className="faq-list">
                        <ul>
                            <li data-aos="fade-up">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Which complaints are entertained by the Social Complaint Portal? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                    <p>
                                    complaints related to water supply, electricity supply, sewage, solid waste management, road repair and maintainance, stray animals.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="100">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">How can I check the status of my complaint status? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                    Go to drop down list, select complaint status then enter you complaint number to check the status of your complaint.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="200">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">What all information do I need to provide while filing a complaint? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                    While registering a complaint select releavent complaint category, give short description of complaint, provide your address/landmark, upload image/picture related to issue and according to severity of problem select specific priority.
                                    </p>
                                </div>
                            </li>

                            {/* <li data-aos="fade-up" data-aos-delay="300">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Step-by-step process for handling customer complaints? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                                    </p>
                                </div>
                            </li> */}

                            <li data-aos="fade-up" data-aos-delay="400">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed"> What is social complaint portal? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        This is a single window complaint management system, which helps making whole process transparent & flexible for citizens & eliminate delay in resolving problems.
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </section>{/* End Frequently Asked Questions Section */}
        </div>
    )
}
