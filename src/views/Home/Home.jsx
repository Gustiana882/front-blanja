import { Component } from "react";
import './Home.css'
import Header from '../../component/header/header';
import Carousel from '../../component/carousel/carousel';
import Card from '../../component/card/card';
import Modal from "../../component/modal/modal.jsx";
import axios from "axios";
import Alert from '../../component/alert/alert'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
        }
    }

    getDataProduct = async () => {
        try {
            const res = await axios({ method: 'get', url: `http://localhost:9000/product` })
            this.setState({ product: res.data.data })
        } catch (error) {
            alert('Maaf API Offline')
        }
    }

    componentDidMount = async () => {
        this.getDataProduct()
        console.log(document.cookie)
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
                <Alert />
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3 className="text-bold">New</h3>
                            <small className="text-secondary">You’ve never seen it before!</small>
                        </div>
                        <button
                            className="btn btn-primary btn-sm my-auto"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#addProduct">
                            Add Product
                        </button>

                    </div>

                    {/* {(this.state.resStatus.alert) ? <Alert message={this.state.resStatus.message} type={this.state.resStatus.type} callback={(e) => this.setState({ resStatus: { alert: false, message: '', isError: '' } })} /> : ''}
                    {(product.length > 0) ? '' : <Alert message="Blank Product" type="danger" />} */}

                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5">
                        {product.map((val, i) =>
                            <div className="col py-3" key={i}>
                                <Card
                                    title={val.name}
                                    price={val.price}
                                    brand={val.brand}
                                    review={val.review}
                                    slug={`${val.name.replace(/ /, '-')}-${val.id}`} />
                            </div>
                        )}
                    </div>
                </div>
                <Modal
                    action="product"
                    method="POST"
                    title="Add Product"
                    buttonId="addProduct"
                    input="form=Name, select=Category=product/category, form=Brand, form=Price, form=Review, form=Star"
                    callback={(res) => this.responAddProduct(res)} />
            </div>
        )
    }
}

export default Home;