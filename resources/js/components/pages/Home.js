import React from 'react'
import { Link } from 'react-router-dom'
import Testimonials from '../Testimonials'
import CaseStudies from '../CaseStudies'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div id="welcome" className="container-fluid">
                    <div class="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-6">
                                <div class="descriptive-content">
                                    <p class="text-info">
                                        BRAND, DEV, ECOM, MARKETING
                                    </p>

                                    <h1>
                                        We unleash <br />
                                        <span>business potential</span>
                                    </h1>

                                    <p>
                                        We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.
                                    </p>

                                    <Link class="link-primary" to='/contact'>Let's talk</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="welcome-image"></div>
                </div>

                <section id="capability" className="container-fluid bg-light">
                    <div class="container">
                        {/* Add in width 100 else for some reason the row is pushed off the page  */}
                        <div class="row w-100">
                            <div class="col-12 col-sm-6">
                                <div class="descriptive-content mb-4">
                                    <h1>
                                        What are <br />
                                        <span>we capable of</span>
                                    </h1>

                                    <p>
                                        By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.
                                    </p>

                                    <Link class="link-primary" to='/contact'>Our process</Link>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div id="capabilities-right">
                                    <div class="row">
                                        <div class="col-6 mb-2">
                                            <h4>
                                                Brand
                                            </h4>

                                            <ul class="list-group">
                                                <li>
                                                    <Link class="link-secondary">Brand Strategy</Link>
                                                </li>

                                                <li>
                                                    <Link class="link-secondary">Logo & Name</Link>
                                                </li>

                                                <li>
                                                    <Link class="link-secondary">Identity & Collateral</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <div class="col-6 mb-2">
                                            <h4>
                                                Marketing
                                            </h4>

                                            <ul class="list-group">
                                                <li>
                                                    <Link class="link-secondary">Digital</Link>
                                                </li>

                                                <li>
                                                    <Link class="link-secondary">Market Research</Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-6 mb-2">
                                            <h4>
                                                Development
                                            </h4>

                                            <ul class="list-group">
                                                <li>
                                                    <Link class="link-secondary">eCommerce</Link>
                                                </li>

                                                <li>
                                                    <Link class="link-secondary">Web Development</Link>
                                                </li>

                                                <li>
                                                    <Link class="link-secondary">Mobile Apps</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="case_studies" class="container-fluid">
                    <CaseStudies />
                </section>

                <section id="testimonials" class="container-fluid">
                    <Testimonials/>
                </section>
            </div>
        )
    }
}

export default Home