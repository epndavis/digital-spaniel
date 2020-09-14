import React from 'react'
import Slider from "react-slick";

class Testimonials extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testimonials: [
                {
                    name: 'Johnny B. Goode',
                    description: 'CEO, Getting Things Done',
                    quote: 'Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!',
                    image: '/images/testimonials/testimonial_face01.png'
                },
                {
                    name: 'Mary Jane',
                    description: 'CEO, Design Matters',
                    quote: 'Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this.',
                    image: '/images/testimonials/testimonial_face02.png'
                },
                {
                    name: 'Paul Simon',
                    description: 'Founder, MegaCorp',
                    quote: 'We needed a creative and unique brand which could compete against established products. Digital Spaniel delivered in spades and we’ve seen a huge response to the product launch.',
                    image: '/images/testimonials/testimonial_face03.png'
                },
            ]
        }
    }

    render() {
        const settings = {
            focusOnSelect: true,
            className: "center",
            centerMode: true,
            arrows: false,
            infinite: true,
            speed: 500,
            dots: true,
            variableWidth: true
        };

        return (
            <div class="container">
                <h1>
                    Kind words <br />
                    <span>from our clients</span>
                </h1>

                <Slider {...settings}>
                    {this.state.testimonials.map((testimonial, index) => {
                        return <div class="slide text-center" key={index} style={{ width: 375 }}>
                            <div class="card shadow border-0 rounded">
                                <div class="card-body">
                                    <div class="testimonial-quote mb-4">
                                        <p class="card-text">
                                            { testimonial.quote }
                                        </p>
                                    </div>

                                    <img class="card-profile mb-2" src={testimonial.image} />

                                    <div>
                                        <strong>
                                            {testimonial.name}
                                        </strong>
                                    </div>

                                    <span>
                                        {testimonial.description}
                                    </span>
                                </div> 
                            </div>   
                        </div>
                    })}
                </Slider>
            </div>
        )
    }
}

export default Testimonials
