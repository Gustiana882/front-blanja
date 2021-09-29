import './header.css'
import logo from '../../asset/logo.png'
import { Link } from 'react-router-dom'
import Alert from '../alert/alert'
import { connect } from 'react-redux'
import { useState } from 'react'
import ModalFilter from '../modalFilter/modalFilter'

const Header = (props) => {
    const { data } = props.user
    const searchView = props.propsHistory
    const [handleChange, sethandleChange] = useState('')

    const Search = (e) => {
        e.preventDefault()
        searchView.push(`/search?p=${handleChange}`)
    }


    return (
        <div>
            <Alert />
            <ModalFilter propsHistory={props.propsHistory} />
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top">
                <div className="container justify-content-around">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo.png" width={90} height={35} />
                    </Link>
                    <div className="collapse navbar-collapse justify-content-between">
                        <form className="search ms-auto" onSubmit={Search}>
                            <div className="input-group">
                                <input
                                    className="form-control form-control-sm rounded-pill px-3"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    onChange={(e) => sethandleChange(e.target.value)}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-search icon-search"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>

                            </div>
                        </form>
                        <button
                            className="btn btn-outline-secondary btn-sm rounded px-1 pt-1 mx-4 me-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#modalFilter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-funnel"
                                viewBox="0 0 16 16"
                            >
                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                            </svg>

                        </button>
                        <ul className="nav justify-content-end align-items-center">
                            <li className="nav-item">
                                <Link
                                    className="nav-link link-secondary"
                                    aria-current="page"
                                    to="/bag"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={18}
                                        height={18}
                                        fill="currentColor"
                                        className="bi bi-cart3"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>

                                </Link>
                            </li>
                            {
                                (!props.user.isAuth) ?
                                    <li className="nav-item d-flex">
                                        <Link className="nav-link link-light btn btn-danger btn-sm rounded-pill px-4 py-1 me-1" to="/login">
                                            Login
                                        </Link>
                                        <Link className="nav-link link-secondary btn btn-outline-secondary btn-sm rounded-pill px-4 py-1 ms-1" to="/sign-up">
                                            Signup
                                        </Link>
                                    </li>
                                    :
                                    <li className="nav-item d-flex">
                                        <Link className="nav-link link-secondary" aria-current="page" to="/">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-bell"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                            </svg>

                                        </Link>
                                        <Link className="nav-link link-secondary" aria-current="page" to="/">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-envelope"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                            </svg>

                                        </Link>
                                        <div className="dropdown">
                                            <img
                                                className="rounded-circle dropdown-toggle"
                                                src={data.image}
                                                alt=""
                                                width={30}
                                                height={30}
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            />
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    {(data.roles === 'customer') ?
                                                        <Link className="dropdown-item" to="/profile-user">
                                                            Profile
                                                        </Link>
                                                        :
                                                        <Link className="dropdown-item" to="/profile-store">
                                                            Profile
                                                        </Link>
                                                    }
                                                </li>
                                                <li>
                                                    <button className="dropdown-item" onClick={props.logOut}>
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                            }


                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-bottom navbar-light bg-light d-block d-md-none fixed-bottom">
                <ul className="nav d-flex justify-content-around">
                    <li className="nav-item">
                        <Link
                            className="nav-link link-secondary p-0 nav-icon text-center"
                            aria-current="page"
                            to="/"
                        >
                            <div className="text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="currentColor"
                                    className="bi bi-house-door"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                                </svg>

                            </div>
                            <small className="nav-title link-active">Home</small>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link link-secondary p-0 nav-icon text-center"
                            aria-current="page"
                            to="/bag"
                        >
                            <div className="text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="currentColor"
                                    className="bi bi-cart3"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>

                            </div>
                            <small className="nav-title">Shop</small>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link link-secondary p-0 nav-icon text-center"
                            to="/bag"
                        >
                            <div className="text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="currentColor"
                                    className="bi bi-handbag"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                                </svg>

                            </div>
                            <small className="nav-title">Bag</small>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link link-secondary p-0 nav-icon text-center"
                            to="/favorite"
                        >
                            <div className="text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="currentColor"
                                    className="bi bi-heart"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>

                            </div>
                            <small className="nav-title">Favorites</small>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link link-secondary p-0 nav-icon text-center"
                            to="/login"
                        >
                            <div>
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

                            </div>
                            <small className="nav-title">Profile</small>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch({ type: 'UNSET_AUTH' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);