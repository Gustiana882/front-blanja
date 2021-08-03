import { Component } from "react";
import Header from '../../component/header/header';
import { Link } from 'react-router-dom'
import BtnQty from '../../component/btn-qty/btn-qty'
import axios from 'axios';

const Profile = () => {
    const env = process.env.DOMAIN
    console.log(env)
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 px-4" style={{ backgroundColor: "lightblue", height: "100vh", paddingTop: "80px" }}>
                    <div className="d-flex">
                        <div>
                            <img src="" alt="" className="rounded-pill bg-secondary" width={50} height={50} />
                        </div>
                        <div className="p-2">
                            <h6 className="fw-bolder m-0">Johanes Mikael</h6>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-pencil-fill me-2" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                    </svg>
                                </span>
                                <small>Ubah profile</small>
                            </p>
                        </div>
                    </div>
                    <div>
                        <ul className="nav flex-column mt-5">
                            <li className="nav-item">
                                <div className="d-flex align-items-center">
                                    <span className="bg-light p-2 rounded-pill me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            fill="currentColor"
                                            className="bi bi-person"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                        </svg>
                                    </span>
                                    <h6 className="m-0 fw-bolder">My account</h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-10 col-lg-9 col-md-8" style={{ backgroundColor: "lightgreen", height: "100vh", paddingTop: "80px" }}>hello</div>
            </div>
        </div>
    )
}


export default Profile;