import { Component } from "react";
import Header from '../../component/header/header';
import Carousel from '../../component/carousel/carousel';
import Card from '../../component/card/card';
import axios from "axios";
import { toast } from 'react-toastify'
import { connect } from 'react-redux'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
        }
    }

    getDataProduct = async () => {
        try {
            const res = await axios({ method: 'get', url: `${process.env.REACT_APP_DOMAIN}/product` })
            this.setState({ product: res.data.data })
        } catch (error) {
            toast.error('Maaf API Offline')
        }
    }

    componentDidMount = () => {
        this.getDataProduct()
    }


    render = () => {
        const product = this.state.product;
        return (
            <div style={{marginTop:"80px", marginBottom:"80px"}}>
                <Header propsHistory={this.props.history} />
                <div className="container carousel">
                    <div className="my-5">
                        <Carousel width={370} height={110} carouselName="" play={true} />
                    </div>
                    <div className="my-5">
                        <Carousel width={120} height={110} carouselName="Categori" />
                    </div>
                </div>
                <div className="container">
                    <div>
                        <h4 className="fw-bold">New</h4>
                        <small className="text-secondary">You’ve never seen it before!</small>
                    </div>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5">
                        {product.map((val, i) =>
                            <div className="col py-3" key={i}>
                                <Card
                                    title={val.name}
                                    price={val.price}
                                    brand={val.brand}
                                    review={val.review}
                                    image={val.image}
                                    slug={`${val.name.replace(/ /, '-')}-${val.id}`} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Home);