import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import withAuth from '../../../utils/WithAuth'

const Sidebar = (props) => {
    const { data } = props.user
    return (
        <section>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 bg-white h-100 d-none d-sm-block"
                style={{ width: 280 }}>

                <div className="d-flex ms-4 mt-5 mb-4">
                    <div className="bg-secondary rounded-pill" style={{ width: '50px', height: '50px' }}>
                        <img src={`${process.env.REACT_APP_DOMAIN}/${data.image}`} alt="" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <div className="ms-2">
                        <h6 className="m-0 fw-bolder">{data.name}</h6>
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
                    {(data.roles === 'seller') ?
                        <li>
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
                                        <Link className="dropdown-item" to="/profile-store">
                                            Store profile
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        : ''}
                    {(data.roles === 'seller') ?
                        <li>
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
                        </li>
                        : ''}
                    {(data.roles === 'seller') ?
                        <li>
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
                        </li>
                        : ''}
                    {(['customer'].find(roles => roles === data.roles)) ?
                        <>
                            <li>
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
                                                className="bi bi-person"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                            </svg>

                                        </span>
                                        My account
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item" to="/profile-user">
                                                Store profile
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
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
                                                className="bi bi-geo-alt"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>


                                        </span>
                                        Shipping Address
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item" to="/profile">
                                                Store profile
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
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
                                                className="bi bi-clipboard"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                            </svg>

                                        </span>
                                        My Order
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item" to="/profile">
                                                Store profile
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </>
                        : ''}
                </ul>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default withAuth(connect(mapStateToProps)(Sidebar))