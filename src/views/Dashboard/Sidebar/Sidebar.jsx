import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import cookie from '../../../helper/cookie'


const Sidebar = () => {
    const [profile, setProfile] = useState([{
        name: '',
        email: '',
        phone: '',
    }])
    
    const getProfile = () => {
        axios({
            method: 'get',
            url: 'http://192.168.43.152:9000/profile',
            headers: {
                'token': cookie.getCookie().token,
                'content-type': 'multipart/form-data',
            },
        }).then((result) => {
            if (!result.data.isError) {
                return setProfile(result.data.data)
            } else {
                return toast.error(result.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }


    useEffect(()=>{
        getProfile()
    }, [])
    return (
        <section>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 bg-white h-100 d-none d-sm-block"
                style={{ width: 280 }}>

                <div className="d-flex ms-4 mt-5 mb-4">
                    <div className="bg-secondary rounded-pill" style={{ width: '50px', height: '50px' }}>
                        <img src={`http://localhost:9000/${profile[0].image}`} alt="" style={{ width: '50px', height: '50px' }}/>
                    </div>
                    <div className="ms-2">
                        <h6 className="m-0 fw-bolder">{profile[0].name}</h6>
                        <div className="d-flex m-0 text-muted">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={12}
                                    height={12}
                                    fill="currentColor"
                                    className="bi bi-pencil-fill me-1"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                            </span>
                            <p><small>Ubah Profile</small></p>
                        </div>
                    </div>
                </div>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <Link to='/' className="nav-link link-dark">
                            <div className="dropdown">

                                <Link
                                    className="nav-link link-dark dropdown-toggle"
                                    to="/"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span className="me-2 p-2 rounded-pill text-white" style={{ backgroundColor: '#456BF3' }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-shop-window mb-1"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                    </span>
                                    Store
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li>
                                        <Link className="dropdown-item" to="/profile">
                                            Store profile
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </Link>
                    </li>
                    <li>
                        <Link to='/' className="nav-link link-dark">
                            <div className="dropdown">

                                <Link
                                    className="nav-link link-dark dropdown-toggle"
                                    to="/"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span className="me-2 p-2 rounded-pill text-white" style={{ backgroundColor: '#F36F45' }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-box"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                                        </svg>

                                    </span>
                                    Product
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li>
                                        <Link className="dropdown-item" to="/my-product">
                                            My Product
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/inventory">
                                            Selling products
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </Link>
                    </li>
                    <li>
                        <Link to='/' className="nav-link link-dark">
                            <div className="dropdown">

                                <Link
                                    className="nav-link link-dark dropdown-toggle"
                                    to="/"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span className="me-2 p-2 rounded-pill text-white" style={{ backgroundColor: '#F3456F' }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-cart2"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg>

                                    </span>
                                    Order
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Another action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Something else here
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Sidebar