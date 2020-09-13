import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div id="welcome" className="container-fluid">
                <div className="row align-items-center h-100">
                    <div className="col-6">
                        <div class="welcome-text">
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
        )
    }
}

export default Home