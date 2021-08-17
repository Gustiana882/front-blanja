import Alert from '../../component/alert/alert'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../asset/logo.png'
import { useState } from 'react'
import withAuth from '../../utils/WithAuth'
import React from 'react'
import Axios from 'axios'
import { toast } from 'react-toastify'

const Signup = () => {
    const history = useHistory()
    const [formSignUp, setFormSignUp] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        btnradio: "customer",
    })

    const [error, setError] = useState('')


    const handleChange = (element) => {
        const name = element.target.name
        const value = element.target.value
        setFormSignUp({ ...formSignUp, ...{ [name]: value } })
    }


    const checkInputPassword = () => {
        const password = formSignUp.password
        const repeatPassword = formSignUp.repeatPassword
        if (password.length <= 8) {
            setError('was-validated')
            return console.log('pasword harus lebih dari 8 karakter')
        }
        if (password.match(/^[A-Z0-9]+/)) {
            setError('was-validated')
            return console.log('pasword harus mengandung huruf besar, angka, dan speasialcarakter')
        }
        if (password !== repeatPassword) {
            setError('was-validated')
            return console.log('password-tidak sama')
        }
        return console.log('ok')
    }

    const formData = () => {
        let formData;
        if (formSignUp.btnradio === 'customer') {
            formData = {
                name: formSignUp.name,
                email: formSignUp.email,
                password: formSignUp.password
            }
        } else {
            formData = {
                name: formSignUp.name,
                email: formSignUp.email,
                password: formSignUp.password,
                phone: formSignUp.phone,
                store: formSignUp.store,
            }
        }
        return formData;
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        checkInputPassword()

        Axios({
            method: 'post',
            url: `${process.env.REACT_APP_DOMAIN}/register/${formSignUp.btnradio}`,
            headers: {
                'content-type': 'application/json',
            },
            data: formData(),
        }).then(res => {
            toast.success(res.data.message)
            history.push('/login')
        })
            .catch(error => toast.error(error.message))

    }

    return (
        <div className="bg-white">
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
                    <form onSubmit={handleSubmit} className={`needs-validation ${error}`} noValidate >
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                                <label className="btn btn-outline-danger col-6" htmlFor="btnradio2">
                                    Seller
                                </label>
                            </div>
                        </div>
                        <div className="col-12 my-3">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                required
                                placeholder="name"
                                autoComplete="true"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12 my-3">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                required
                                placeholder="email"
                                autoComplete="off"
                                onChange={handleChange}
                            />
                        </div>
                        {(formSignUp.btnradio === 'customer') ? '' :
                            <>
                                <div className="col-12 my-3">
                                    <input
                                        type="number"
                                        name="phone"
                                        className="form-control"
                                        required
                                        placeholder="Phone number"
                                        autoComplete="off"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12 my-3">
                                    <input
                                        type="text"
                                        name="store"
                                        className="form-control"
                                        required
                                        placeholder="Store name"
                                        autoComplete="off"
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        }
                        <div className="col-12 my-3">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                required
                                placeholder="password"
                                autoComplete="off"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12 my-3">
                            <input
                                type="password"
                                name="repeatPassword"
                                className="form-control"
                                required
                                placeholder="repeat password"
                                autoComplete="off"
                                onChange={handleChange}
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
                    <p className="text-center mb-5 mt-3"><small>Already have a account?<Link to="/login" className="text-danger">Login</Link></small></p>
                </div>
            </div>
        </div>

    );
}


export default withAuth(Signup)