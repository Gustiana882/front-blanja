import { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.props = props;
    }
    render() {
        var settings = {
            className: "slider variable-width",
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            autoplay: this.props.play || false,
            autoplaySpeed: 3000,
            speed:this.props.width*10,
            pauseOnHover: true
        };
        return (
            <div>
                <h4 className="fw-bold"> {this.props.carouselName || ''} </h4>
                <Slider {...settings}>
                    {
                        this.props.data.map((v, i) => 
                            <div className="p-2" key={i} style={{ width: this.props.width }}>
                                <div className="card rounded-carousel">
                                    <img
                                        height={this.props.height}
                                        width={this.props.width}
                                        src={v.image}
                                        className="card-img rounded-carousel"
                                        alt={v.name}
                                    />
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        );
    }
}

export default Carousel;