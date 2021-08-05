import { Component } from 'react';
import { Link, Redirect, useHistory } from "react-router-dom"
import logo from '../../asset/logo.png'
import axios from 'axios';
import cookie from '../../helper/cookie'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://192.168.43.152:9000/login',
            data: {
                email: "emailTest@gmail.com",
                password: "test1234",
            }

        })
            .then((response) => {
                const res = response.data;
                const token = res.data[0].token_key;
                const image = `http://localhost:9000/${res.data[0].image}`;

                if (res.message == 'login berhasil!') {
                    cookie.setCookie(true, token, image)
                    return this.props.history.goBack('/')
                }
            });
    }

    formEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    formPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div className="mt-4">
                {(document.cookie.split(',')[0] === "true") ? <Redirect to="/" /> : ''}
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
                        <form onSubmit={this.handleSubmit}
                            className="row g-3 needs-validation"
                        >
                            <div
                                className="btn-group col-9 mx-auto mt-3 mb-5"
                                role="group"
                                aria-label="Basic radio toggle button group"
                            >
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id="btnradio1"
                                    autoComplete="off"
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
                                    defaultChecked
                                />
                                <label className="btn btn-outline-danger col-6" htmlFor="btnradio2">
                                    Seller
                                </label>
                            </div>
                            <div className="col-12">

                                <input
                                    type="email"
                                    className="form-control"
                                    required
                                    placeholder="email"
                                    autoComplete="off"
                                    onChange={this.formEmail}
                                    value="emailTest@gmail.com"
                                />

                            </div>
                            <div className="col-12">

                                <input
                                    type="password"
                                    className="form-control"
                                    required
                                    placeholder="password"
                                    autoComplete="off"
                                    onChange={this.formPassword}
                                    value="o"
                                />

                            </div>
                            <Link to="/forgot-password" className="nav-link link-dark d-flex justify-content-end">
                                <small>Forgot your password?</small>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-arrow-right text-danger mt-1"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    />
                                </svg>

                            </Link>
                            <div className="col-12 mt-4">
                                <div className="d-grid gap-2">
                                    <button
                                        className="btn rounded-pill btn-danger text-white"
                                        type="submit"
                                    >
                                        LOGIN
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;
