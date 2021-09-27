import { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.data = props.data;
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
                        this.data.map((val, i) => {
                            return (
                                <div className="p-2" style={{ width: this.props.width }} key={i}>
                                    <div className="card rounded-carousel">
                                        <img
                                            height={this.props.height}
                                            width={this.props.width}
                                            src={val.image}
                                            className="card-img rounded-carousel"
                                            alt="tshirt.png"
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        );
    }
}

export default Carousel;