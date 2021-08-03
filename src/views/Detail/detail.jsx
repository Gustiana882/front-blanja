import { Component } from "react";
import Header from '../../component/header/header';
import { Link } from 'react-router-dom'
import './detail.css'
import Star from '../../component/star/star'
import BtnQty from "../../component/btn-qty/btn-qty";
import ProgressBar from "../../component/progres-bar/progres-bar";
import axios from "axios";
import Alert from '../../component/alert/alert'
import Cookie from '../../helper/cookie'


class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            qty: 1,
            notif: ''
        }
    }

    getDataProductById = async () => {
        const { params } = this.props.match
        try {
            const res = await axios({ method: 'get', url: `http://localhost:9000/product/${params.items.split('-').pop()}` })
            this.setState({ product: res.data.data[0] })
        } catch (error) {
            alert('Maaf API Offline')
        }
    }

    componentDidMount() {
        this.getDataProductById()
    }

    addBag = (id) => {
        const cookie = Cookie.getCookie()
        if (!cookie) {
            return this.props.history.push('/login')
        } else {
            console.log(cookie)
            axios({
                method: 'post',
                url: 'http://localhost:9000/bag',
                headers: {'token': cookie.token},
                data: {
                    productId: id,
                    qty: this.state.qty,
                }

            }).then((res) => {
                const data = res.data
                if (data.statusCode === 200 && data.message == 'add data bag success'){
                    return this.setState({ notif: <Alert message={data.message} type="success" close={()=> this.setState({notif: ''})}/> })
                } else {
                    return this.setState({ notif: <Alert message={data.message} type="danger" close={()=> this.setState({notif: ''})}/> })
                }
            })
        }
    }

    btnQty = (newValue) => {
        this.setState({
            qty: newValue,
        })
    }

    rupiah = (number) => {
        return `Rp ${new Intl.NumberFormat("id-ID", {
            //   style: "currency",
            currency: "IDR"
        }).format(number)}`;
    }

    render() {
        return (
            <div>
                <Header callback={this.search} />
                {this.state.notif}
                <div className="container container-detail">
                    <nav className="breadcrumb-detail col-12 col-md-12 col-lg-8 ms-auto me-auto" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" aria-current="page">
                                <Link to="/" className="link-breadcrumd-detail">Home</Link>
                            </li>
                            <li className="breadcrumb-item" aria-current="page">
                                <Link to="/" className="link-breadcrumd-detail">Category</Link>
                            </li>
                            <li className="breadcrumb-item" aria-current="page">
                                <Link to="/" className="link-breadcrumd-detail">{this.state.product.name}</Link>
                            </li>
                        </ol>
                    </nav>

                    <section className="row justify-content-md-center">
                        <div className="col-12 col-md-6 col-lg-4 px-4">
                            <div className="card card-detail">
                                <img src={`http://localhost:9000/${this.state.product.image}`} className="card-img-top" alt="..." />
                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-5 px-4">
                            <div>
                                <h4 className="fw-bold m-0">{this.state.product.name}</h4>
                                <p className="text-muted m-0"><small className="fw-bolder text-secodary">{this.state.product.brand}</small></p>

                                <Star review={this.state.product.review} star={this.state.product.star} />

                                <div className="my-3">
                                    <p className="text-muted mb-0"><small className="fw-lighte">Price</small></p>
                                    <h4 className="fw-bold">{this.rupiah(this.state.product.price)}</h4>
                                </div>

                                <BtnQty value={this.state.qty} callback={(id, newValue) => this.btnQty(newValue)} />

                                <div className="mt-3 d-flex justify-content-between">
                                    <button type="button" className="btn btn-sm rounded-pill px-4 btn-outline-secondary">
                                        <p className="m-0">
                                            <small className="fw-bolder">Chat</small>
                                        </p>
                                    </button>
                                    <button type="button" className="btn btn-sm rounded-pill px-4 btn-outline-secondary" onClick={() => this.addBag(this.state.product.id)}>
                                        <p className="m-0">
                                            <small className="fw-bolder">Add Bag</small>
                                        </p>
                                    </button>
                                    <button type="button" className="btn btn-sm rounded-pill px-4 btn-danger">
                                        <p className="m-0">
                                            <small className="fw-bolder">Buy Now</small>
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="col-12 col-md-12 col-lg-8 ms-auto me-auto px-2">
                        <div className="mt-4">
                            <h4 className="fw-bolder">Informasi Product</h4>
                        </div>
                        <div className="mt-4">
                            <h5 className="fw-bolder">Condition</h5>
                            <h5 className="fw-bolder text-danger">{this.state.product.condition}</h5>
                        </div>
                        <div className="mt-4">
                            <h5 className="fw-bolder">Description</h5>
                            <div className="text-muted">
                                <p>{this.state.product.description}</p>
                            </div>
                        </div>
                    </section>
                    <section className="mt-5 col-12 col-md-12 col-lg-8 ms-auto me-auto px-4">
                        <h5 className="fw-bolder">Product Review</h5>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="d-flex align-items-end">
                                    <h1
                                        className="fw-bold"
                                        style={{ fontSize: "50px" }}
                                    >5.0</h1>
                                    <h5 className="text-muted">/10</h5>
                                </div>
                                <div className="mb-5">
                                    <Star review={this.state.product.review} star={this.state.product.star} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <ProgressBar index={5} value={100} poin={4} />
                                <ProgressBar index={4} value={0} poin={0} />
                                <ProgressBar index={3} value={0} poin={0} />
                                <ProgressBar index={2} value={0} poin={0} />
                                <ProgressBar index={1} value={0} poin={0} />

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Detail;