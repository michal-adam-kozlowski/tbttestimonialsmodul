import React, {Component} from "react";
import Testimonial from "./Testimonial.js";
import "./TestimonialsWrapper.scss";


var Testimonials_Arr = [
    {
        image : "./img/girl1.jpg",
        name : 'Ania',
        rating : 5,
        testimonial_text : 'Najlepsze wyjazdy, cudowni ludzie, niepowtarzalne wspomnienia!'
    },

        {
        image : './img/man1.jpg',
        name : 'Jacek',
        rating : 4,
        testimonial_text : 'Wszystko ok!'
        },

    {
        image : './img/man2.jpg',
        name : 'Robert',
        rating : 3,
        testimonial_text : 'Autokar smierdzial i dlatego 3!'
        }
    ];


class TestimonialsWrapper extends Component {
    render () {
        return (
            <div className='Testimonials_Wrapper'>
                    {Testimonials_Arr.map((el) =>
                        <Testimonial image={el.image} name={el.name} rating={el.rating} text={el.testimonial_text}/>
                    )}
            </div>
        )

    }
}

export default TestimonialsWrapper;