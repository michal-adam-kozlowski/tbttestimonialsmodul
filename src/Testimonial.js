import React, {Component} from "react";
import "./Testimonial.scss";


class Testimonial extends Component {
    render () {
        return (
            <div>
                <img src={require(`${this.props.image}`)}/>
                <h1>{this.props.name}</h1>
                <p>{this.props.rating}</p>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Testimonial;