import { Component } from 'react';
import { Link } from "react-router-dom"
import logo from '../../asset/logo.png'
import axios from 'axios';
import { toast } from 'react-toastify'
import Alert from '../../component/alert/alert'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionsUser from '../../stores/action/userAction'
import WithAuth from '../../utils/WithAuth';

import _user_ from '../../_moch_/user.json'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginForm: {
                btnradio: "customer"
            },
        }
    }


    getUser = (token) => {
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_DOMAIN}/profile/${this.state.loginForm.btnradio}`,
            headers: { token }
        }).then((response) => {
            const { data } = response.data;
            this.props.UserSet({
                address: data[0].address,
                email: data[0].email,
                image: data[0].image,
                name: data[0].name,
                phone: data[0].phone,
                roles: data[0].roles,
            })
        }).catch(error => toast.error(error.message))
    }

    getUserMoc = () => {
        this.props.UserSet({
            address: _user_[0].address,
            email: _user_[0].email,
            image: _user_[0].image,
            name: _user_[0].name,
            phone: _user_[0].phone,
            roles: _user_[0].roles,
        })
        this.props.AuthSet("token1234")
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log('ok')
        this.props.history.goBack('/')
        this.getUserMoc()
        // axios({
        //     method: 'post',
        //     url: `${process.env.REACT_APP_DOMAIN}/login/${this.state.loginForm.btnradio}`,
        //     data: {
        //         email: this.state.loginForm.email,
        //         password: this.state.loginForm.password,
        //     }
        // }).then((response) => {
        //     const res = response.data;
        //     if (res.message === 'login berhasil!') {
        //         const token = res.data[0].token_key;
        //         this.getUser(token)
        //         this.props.AuthSet(token)
        //         return this.props.history.goBack('/')
        //     } else {
        //         return toast.error(res.message)
        //     }
        // }).catch(error => toast.error(error.message))
    }

    handleChange = (element) => {
        const name = element.target.name
        const value = element.target.value
        this.setState({
            loginForm: { ...this.state.loginForm, ...{ [name]: value } }
        })
    }

    render = () => {
        return (
            <div className="mt-4">
                <Alert />
                <div className="container">
                    <div className="col-12 col-md-6 col-xl-4 mx-auto">
                        <div className="d-block d-md-none mb-5">
                            <Link to="/" className="link-dark">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-chevron-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                    />
                                </svg>

                            </Link>
                            <h1 className="mt-4 text-bold">Login</h1>
                        </div>
                        <div className="d-none d-md-block my-5">
                            <Link to="/">
                                <img className="mx-auto d-block" src={logo} alt="logo.png" />
                            </Link>
                            <h6 className="text-center mt-4 text-bold">
                                Please login with your account
                            </h6>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-12 d-flex justify-content-center">
                                <div
                                    className="btn-group col-8 mx-auto mt-3 mb-5"
                                    role="group"
                                    aria-label="Basic radio toggle button group" >
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="btnradio"
                                        id="btnradio1"
                                        autoComplete="off"
                                        value="customer"
                                        defaultChecked
                                        onChange={this.handleChange}
                                    />
                                    <label className="btn btn-outline-danger col-6" htmlFor="btnradio1">
                                        Custommer
                                    </label>
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="btnradio"
                                        id="btnradio2"
                                        autoComplete="off"
                                        value="seller"
                                        onChange={this.handleChange}
                                    />
                                    <label className="btn btn-outline-danger col-6" htmlFor="btnradio2">
                                        Seller
                                    </label>
                                </div>
                            </div>
                            <div className="col-12 my-2">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    required
                                    placeholder="email"
                                    autoComplete="true"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="col-12 my-2">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    required
                                    placeholder="password"
                                    autoComplete="off"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <Link to="/forgot-password" className="nav-link link-dark d-flex justify-content-end">
                                <small>Forgot your password?</small>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right text-danger mt-1" viewBox="0 0 16 16" >
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </Link>
                            <div className="col-12 mt-4">
                                <div className="d-grid gap-2">
                                    <button className="btn rounded-pill btn-danger text-white" type="submit">
                                        LOGIN
                                    </button>
                                </div>
                            </div>
                        </form>
                    <p className="text-center mb-5 mt-3"><small>Don't have a account?<Link to="/sign-up" className="text-danger">Register</Link></small></p>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AuthSet: bindActionCreators(ActionsUser.AuthSet, dispatch),
        UserSet: bindActionCreators(ActionsUser.UserSet, dispatch),
    }

}

export default WithAuth(connect(mapStateToProps, mapDispatchToProps)(Login))
