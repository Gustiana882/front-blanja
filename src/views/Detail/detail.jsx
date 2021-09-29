import { Component } from "react";
import Header from '../../component/header/header';
import { Link } from 'react-router-dom'
import './detail.css'
import Star from '../../component/star/star'
import BtnQty from "../../component/btn-qty/btn-qty";
import ProgressBar from "../../component/progres-bar/progres-bar";
import axios from "axios";
import { toast } from 'react-toastify'
import Rupiah from '../../helper/rupiah'
import ModalProduct from "./ModalProduct";
import { connect } from 'react-redux'


class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            qty: 1,
        }
    }

    getDataProductById = async () => {
        const { params } = this.props.match
        try {
            const res = await axios({ method: 'get', url: `${process.env.REACT_APP_DOMAIN}/product/${params.items.split('-').pop()}` })
            this.setState({ product: res.data.data[0] })
        } catch (error) {
            toast.error(error.message)
        }
    }

    componentDidMount() {
        this.getDataProductById()
    }

    addBag = (id) => {
        if (!this.props.user.token) {
            return this.props.history.push('/login')
        } else {
            axios({
                method: 'post',
                url: `${process.env.REACT_APP_DOMAIN}/bag`,
                headers: { 'token': this.props.user.token },
                data: {
                    productId: id,
                    qty: this.state.qty,
                }
            }).then((res) => {
                const data = res.data
                if (data.statusCode === 200 && data.message === 'add data bag success') {
                    return toast.success(data.message)
                } else {
                    return toast.error(data.message)
                }
            }).catch(error => toast.error(error.message))
        }
    }

    btnQty = (id, newValue) => {
        this.setState({
            qty: newValue,
        })
    }

    render() {
        return (
            <div>
                <Header propsHistory={this.props.history} />
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
                                <img src={this.state.product.image} className="card-img-top" alt="..." />
                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-5">
                            <div>
                                <h4 className="fw-bold m-0">{this.state.product.name}</h4>
                                <p className="text-muted m-0">
                                    <small className="fw-bolder text-secodary">{this.state.product.brand}</small>
                                </p>

                                <Star review={this.state.product.review} star={this.state.product.star} />

                                <div className="my-3">
                                    <p className="text-muted mb-0"><small className="fw-lighte">Price</small></p>
                                    <h4 className="fw-bold">{Rupiah(this.state.product.price)}</h4>
                                </div>
                                <div className="my-3">
                                    <BtnQty value={this.state.qty} callback={this.btnQty} />
                                </div>

                                <div className="d-flex justify-content-between flex-wrap">
                                    <button type="button" className="btn btn-sm rounded-pill px-4 mt-3 btn-outline-secondary">
                                        <p className="m-0">
                                            <small className="fw-bolder">Chat</small>
                                        </p>
                                    </button>
                                    {(this.props.user.data.roles === 'seller') ? '' :
                                        <button type="button" className="btn btn-sm rounded-pill px-4 mt-3 btn-outline-secondary" onClick={() => this.addBag(this.state.product.id)}>
                                            <p className="m-0">
                                                <small className="fw-bolder">Add Bag</small>
                                            </p>
                                        </button>
                                    }
                                    <button type="button" className="btn btn-sm rounded-pill px-5 mt-3 btn-danger">
                                        <p className="m-0">
                                            <small className="fw-bolder">Buy Now</small>
                                        </p>
                                    </button>
                                    <div className="mt-3">
                                        <ModalProduct productData={this.state.product}></ModalProduct>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="col-12 col-md-12 col-lg-8 ms-auto me-auto">
                        <div className="mt-4">
                            <h4 className="fw-bolder">Informasi Product</h4>
                        </div>
                        <div className="mt-4">
                            <h5 className="fw-bolder">Condition</h5>
                            <h5 className="fw-bolder text-danger">{this.state.product.condition}</h5>
                        </div>
                        <div className="mt-4">
                            <h4 className="fw-bolder">Description</h4>
                            <div className="mx-3 text-muted">
                                <div dangerouslySetInnerHTML={{ __html: this.state.product.description }} />
                            </div>
                        </div>
                    </section>
                    <section className="mt-5 col-12 col-md-12 col-lg-8 ms-auto me-auto">
                        <h5 className="fw-bolder">Product Review</h5>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="d-flex align-items-end">
                                    <h1 className="fw-bold" style={{ fontSize: "50px" }} >5.0</h1>
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


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Detail)