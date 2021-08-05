import { Component } from "react";
import Header from '../../component/header/header';
import { Link } from 'react-router-dom'
import BtnQty from '../../component/btn-qty/btn-qty'
import axios from 'axios';
import Sidebar from "./Sidebar/Sidebar";

const Profile = () => {
    const env = process.env.DOMAIN
    console.log(env)
    return (
        <div className="d-flex" style={{ marginTop: '60px', backgroundColor: '#F1F1F1' }}>
            <Header />
            <Sidebar />
            <section className="vw-100">
                <div className="card m-4">
                    <div className="card-header bg-white my-3">
                        <h5>My Profile Store</h5>
                        <p><small>Manage your profile information</small></p>
                    </div>
                    <div className="card-body">
                        <div className="mb-3 row">
                            <label htmlFor="store-name" className="col-sm-4 col-form-label">
                                Store Name
                            </label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="store-name" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-4 col-form-label">
                                Email
                            </label>
                            <div className="col-sm-7">
                                <input type="email" className="form-control" id="email" />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="phone-number" className="col-sm-4 col-form-label">
                                Phone Number
                            </label>
                            <div className="col-sm-7">
                                <input type="number" className="form-control" id="phone-number" />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="description" className="col-sm-4 col-form-label">
                                Store Description
                            </label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="description" />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-danger rounded-pill px-5">Save</button>
                        </div>



                    </div>
                </div>
            </section>

        </div>
    )
}


export default Profile;