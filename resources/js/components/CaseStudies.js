import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick"

export default class CaseStudies extends React.Component {
    constructor(props) {
        super(props);

        this.next = this.next.bind(this);
        
        this.previous = this.previous.bind(this);

        this.state = {
            studies: [
                {
                    title: 'Project title here',
                    description: 'Short project description goes here To explain what the project is all about.',
                    image: '/images/case-studies/dashboard01.png',
                },
                {
                    title: 'Project title here',
                    description: 'Short project description goes here To explain what the project is all about.',
                    image: '/images/case-studies/dashboard01.png',
                },
                {
                    title: 'Project title here',
                    description: 'Short project description goes here To explain what the project is all about.',
                    image: '/images/case-studies/dashboard01.png',
                }
            ]
        }
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            arrows: false,
            infinite: true,
            speed: 500,
            centerPadding: '15%',
        };

        return (
            <div class="container-fluid">
                <div class="row justify-content-center text-center">
                    <div class="col-10 col-md-8 col-lg-4">
                        <h2>
                            Case Studies
                        </h2>

                        <p>
                            Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of you and your business.
                        </p>
                    </div>
                </div>
                
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {this.state.studies.map((study, index) => {
                        return <div class="slide" key={index}>
                            <div class="slide-body">
                                <div class="image-container">
                                    <img class="img-fluid rounded" src={ study.image } />
                                </div>
                                <div class="content">
                                    <h3>
                                        { study.title }
                                    </h3>

                                    <p>
                                        { study.description }
                                    </p>

                                    <Link>Read more</Link>

                                    <div class="slide-buttons">
                                        <button class="btn btn-secondary" onClick={this.previous}>
                                            &lt;
                                        </button>

                                        <button class="btn btn-light" onClick={this.next}>
                                            &gt;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </Slider>
            </div>
        )
    }
}
