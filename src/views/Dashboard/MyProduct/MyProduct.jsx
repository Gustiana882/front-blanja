import { Link } from 'react-router-dom'
import Header from '../../../component/header/header'
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Rupiah from '../../../helper/rupiah'
import { useEffect } from 'react'
import { connect } from 'react-redux'

const MyProduct = (props) => {
 
    const [load, setLoad] = useState(false)
    const [product, setProduct] = useState([])


    const getProduct = () => {
        axios({
            method: 'get',
            url: 'http://192.168.43.152:9000/product/my-product',
            headers: {
                'token': props.user.token,
                'content-type': 'multipart/form-data',
            },
        }).then((result) => {
            if (!result.data.isError) {
                return setProduct(result.data.data)
            } else {
                return toast.error(result.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }
 
    const deleteProduct = (id) => {
        axios({
            method: 'delete',
            url: `http://192.168.43.152:9000/product/${id}`,
            headers: {
                'token': props.user.token,
                'content-type': 'multipart/form-data',
            },
        }).then((result) => {
            if (!result.data.isError) {
                setLoad(true)
                return toast.success(result.data.message)
            } else {
                return toast.error(result.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getProduct()
        return () => {
            setLoad(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [load])

    return (
        <div className="d-flex" style={{ marginTop: '60px', backgroundColor: '#F1F1F1' }}>
            <Header propsHistory={props.history} />
            <Sidebar />
            <section className="vh-100 vw-100">
                <div className="card m-4 p-3">
                    <div className="card-body">
                        <h3>My Product</h3>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">
                                    All Items
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Sould Out
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Archived
                                </Link>
                            </li>
                        </ul>
                        <div className="mb-3 w-50">
                            <input type="text" className="form-control rounded-pill" placeholder="search"
                            />
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/">
                                            Product Name
                                        </Link>
                                    </li>
                                    <li className="nav-item ms-auto">
                                        <Link className="nav-link" to="/">
                                            Price
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            Stock
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                {
                                    product.map((product, i) => {
                                        return (
                                            <div className="row align-items-center justify-content-between my-3 border p-1" key={i} >
                                                <div className="col">
                                                    <img src={`http://localhost:9000/${product.image}`} alt="..." width={55} height={55} />
                                                </div>
                                                <div className="col mx-2 bag-title">
                                                    <h6 className="text-medium m-0">{product.name}</h6>
                                                    <small className="brand text-secondary">{product.brand}</small>
                                                </div>
                                                <div className="col d-flex bag-price me-2">
                                                    <h6 className={`text-bold mb-0 fw-bolder ${(product.condition === "New") ? "text-danger" : "text-secondary"}`}>{product.condition}</h6>
                                                </div>
                                                <div className="col d-flex bag-price me-2">
                                                    <h6 className="text-bold mb-0 fw-bolder">{Rupiah(product.price)}</h6>
                                                </div>
                                                <div className="col">
                                                    <Link onClick={() => deleteProduct(product.id)} className="badge bg-danger nav-link link-light me-2">delete</Link>
                                                    {/* <ModalProduct productData={product} /> */}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(MyProduct)