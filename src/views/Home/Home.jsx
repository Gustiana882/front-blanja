import { Component } from "react";
import Header from '../../component/header/header';
import Carousel from '../../component/carousel/carousel';
import Card from '../../component/card/card';
// import axios from "axios";
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import _banner_ from '../../_moch_/banner.json'
import _category_ from '../../_moch_/category.json'
import _product_ from '../../_moch_/product.json'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            category: [],
            banner: [],
        }
    }

    getDataProduct = async () => {
        try {
            this.setState({ product: _product_ })
            // const res = await axios({ method: 'get', url: `${process.env.REACT_APP_DOMAIN}/product` })
            // this.setState({ product: res.data.data })
        } catch (error) {
            toast.error('Maaf API Offline')
        }
    }

    getCategory = () => {
        this.setState({ category: _category_ })
    }

    getBanner = () => {
        this.setState({ banner: _banner_ })
    }

    componentDidMount = () => {
        this.getDataProduct()
        this.getBanner()
        this.getCategory()
    }


    render = () => {
        const product = this.state.product;
        return (
            <div style={{marginTop:"80px", marginBottom:"80px"}}>
                <Header propsHistory={this.props.history} />
                <div className="container carousel">
                    <div className="my-5">
                        <Carousel width={370} height={110} carouselName="" play={true} data={this.state.banner} />
                    </div>
                    <div className="my-5">
                        <Carousel width={120} height={110} carouselName="Categori" data={this.state.category} />
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
                                    slug={`${val.name.replace(/\s/g, '-')}-${val.id}`} />
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