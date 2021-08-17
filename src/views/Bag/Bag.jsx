import { Component } from "react";
import Header from '../../component/header/header';
import './Bag.css'
import BtnQty from '../../component/btn-qty/btn-qty'
import axios from 'axios';
import Checkbox from '../../component/checkbox/checkbox'
import { connect } from 'react-redux'
import WhitAuth from '../../utils/WithAuth'

class Bag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            bagData: [],
            listDeleteBag: []
        }
    }

    getBag = async () => {
        try {
            const token = this.props.user.token
            const response = await axios({ 
                method: 'get', 
                url: `${process.env.REACT_APP_DOMAIN}/bag`, 
                headers: { 'token': token } })
            const { data } = response.data
            this.setState({
                message: response.data.message,
                bagData: data })
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        this.getBag()
    }

    setQty = async (id, qty) => {
        try {
            const token = this.props.user.token
            axios({
                method: 'put',
                url: `${process.env.REACT_APP_DOMAIN}/bag`,
                headers: { 'token': token },
                data: { 
                    id: id,
                    qty: qty,
                }
            })
            this.getBag()
        } catch (error) {
            // console.log(error)
        }
    }

    rupiah = (number) => {
        return `Rp ${new Intl.NumberFormat("id-ID", {
            currency: "IDR"
        }).format(number)}`;
    }

    selectCardBag = (id) => {
        const list = this.state.listDeleteBag
        const findId = list.find((val, i) => val === id)
        if (findId) {
            const del = list.filter((val) => val !== id)
            return this.setState({ listDeleteBag: del })
        } 
        else if (list.length <= 1) {
            return this.setState({ listDeleteBag: [...list, ...[id]] })
        }
        else {
            return this.setState({ listDeleteBag: [...list, ...[id]] })
        }
    }

    selectAll = () => {
        const list = this.state.bagData.map((val) => val.id)
        this.setState({ listDeleteBag: list })
    }


    deleteAll = async () => {
        try {
            for (let i = 0; i < this.state.listDeleteBag.length; i++) {
                const list = this.state.listDeleteBag[i]
                const token = this.props.user.token
                await axios({ method: 'delete', url: `${process.env.REACT_APP_DOMAIN}/bag/${list}`, headers: { 'token': token } })
                // const { data } = response.data
                this.getBag()
            }
        } catch (error) {
            console.log(error)
        }
    }

    render(props) {
        let sum = 0;
        return (
            <div>
                <Header propsHistory={this.props.history} />
                <section className="container container-bag">
                    <div className="row">
                        <div className="mt-5">
                            <h3 className="text-medium">My bag</h3>
                        </div>
                        <div className="col-12 col-md-8 col-lg-8">
                            <div className="card p-1 px-3 shadow-sm border-0">
                                <div className="d-flex justify-content-between">
                                    <div className="form-check mt-2">

                                        <Checkbox checked={(this.state.listDeleteBag.length <= 0) ? "" : "checked"} callback={(e) => { this.selectAll() }} />

                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Select all items ({this.state.listDeleteBag.length} items selected)
                                        </label>
                                    </div>
                                    <span onClick={this.deleteAll} className="nav-link link-danger" style={{ cursor: 'pointer' }}>
                                        Delete
                                    </span>
                                </div>
                            </div>
                            {(this.state.bagData.length <= 0) ?
                                <div className="alert alert-warning mt-3" role="alert">
                                    {this.state.message}
                                </div>
                                :
                                this.state.bagData.map((value, index) => {
                                    sum += value.product.price * value.qty
                                    const checked = this.state.listDeleteBag.find((list, i) => list === value.id)

                                    return (<div key={index} className="card shadow-sm my-3 p-2 border-0">
                                        <div className="d-flex align-items-center">
                                            <div className="form-check d-flex justify-content-center align-items-center me-2">

                                                <Checkbox checked={(!checked) ? "" : "checked"} id={value.id} callback={this.selectCardBag} />

                                            </div>
                                            <img src={`${process.env.REACT_APP_DOMAIN}/${value.product.image}`} alt="..." width={55} height={55} />
                                            <div className="mx-2 bag-title">
                                                <h6 className="text-medium m-0">{value.product.name}</h6>
                                                <small className="brand text-secondary">{value.product.brand}</small>
                                            </div>
                                            <div className="d-flex mr-2 ms-auto">
                                                <BtnQty callback={(id, newQty) => this.setQty(id, newQty)} value={value.qty} id={value.id} />
                                            </div>
                                            <div className="d-flex ms-auto bag-price">
                                                <h6 className="text-bold mb-0 fw-bolder">{this.rupiah(value.product.price * value.qty)}</h6>
                                            </div>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="card p-3 border-0 shadow-sm">
                                <h5 className="fw-bolder">Shopping Summary</h5>
                                <div className="d-flex justify-content-between">
                                    <p className="text-muted"><small>Total Price</small></p>
                                    <h6 className="fw-bolder m-1">{this.rupiah(sum)}</h6>
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-danger btn-sm rounded-pill">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default WhitAuth(connect(mapStateToProps)(Bag));