import React from 'react'
import { Link } from 'react-router-dom'
import Testimonials from '../Testimonials'
import CaseStudies from '../CaseStudies'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div id="welcome" className="container-fluid">
                    <div className="row align-items-center h-100">
                        <div className="col-6">
                            <div class="descriptive-content">
                                <p>
                                    BRAND, DEV, ECOM, MARKETING
                                </p>

                                <h1>
                                    We unleash <br />
                                    <span>business potential</span>
                                </h1>

                                <p>
                                    We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.
                                </p>

                                <Link to='/contact'>Let's talk</Link>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="welcome-image"></div>
                        </div>
                    </div>
                </div>

                <div id="capability" className="container-fluid bg-light">
                    {/* Add in width 100 else for some reason the row is pushed off the page  */}
                    <div class="row w-100">
                        <div class="col-6">
                            <div class="descriptive-content">
                                <h1>
                                    What are <br />
                                    <span>we capable of</span>
                                </h1>

                                <p>
                                    By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.
                                </p>

                                <Link to='/contact'>Our process</Link>
                            </div>
                        </div>
                        <div class="col-6">
                            <div id="capabilities-right">
                                <div class="row">
                                    <div class="col-4">
                                        <h4>
                                            Brand
                                        </h4>

                                        <Link>Brand Strategy</Link>

                                        <Link>Logo & Name</Link>

                                        <Link>Identity & Collateral</Link>

                                        <h4>
                                            Development
                                        </h4>

                                        <Link>eCommerce</Link>

                                        <Link>Web Development</Link>

                                        <Link>Mobile Apps</Link>
                                    </div>
                                    <div class="col-4">
                                        <h4>
                                            Marketing
                                        </h4>

                                        <Link>Digital</Link>

                                        <Link>Market Research</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="case_studies">
                    <CaseStudies />
                </div>

                <div id="testimonials">
                    <Testimonials/>
                </div>
            </div>
        )
    }
}

export default Home