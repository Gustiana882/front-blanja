import { Component } from "react";
import './Home.css'
import Header from '../../component/header/header';
import Carousel from '../../component/carousel/carousel';
import Card from '../../component/card/card';
import axios from "axios";
import { toast } from 'react-toastify'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
        }
    }

    getDataProduct = async () => {
        try {
            const res = await axios({ method: 'get', url: `http://192.168.43.152:9000/product` })
            this.setState({ product: res.data.data })
        } catch (error) {
            toast.error('Maaf API Offline')
        }
    }

    componentDidMount = () => {
        this.getDataProduct()
    }


    render() {
        const product = this.state.product;
        return (
            <div>
                <Header callback={this.search} />
                <div className="container carousel">
                    <div>
                        <Carousel width={370} height={110} carouselName="" play={true} />
                    </div>
                    <div>
                        <Carousel width={120} height={110} carouselName="Categori" />
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3 className="text-bold">New</h3>
                            <small className="text-secondary">You’ve never seen it before!</small>
                        </div>
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

export default Home;